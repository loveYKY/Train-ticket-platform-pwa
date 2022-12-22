import React, {useContext} from 'react';
import './Choose.scss';
import {orderContext} from '../../index';
import classNames from 'classnames';
interface chooseProps {}

const Choose: React.FC<chooseProps> = props => {
    const {dispatch, ...orderState} = useContext(orderContext);

    const changeSeatStatus = (seatLine: number, seatPosition: string) => {
        //先判断当前位置是否有被选中(状态判断)
        for (let passenger of orderState.passengers) {
            //如果存在,则删除当前座位
            if (
                passenger.seatType &&
                passenger.seatType.seatLine === seatLine &&
                passenger.seatType.seatPosition === seatPosition
            ) {
                dispatch({
                    type: 'updatePassengers',
                    name: 'seatType',
                    value: {
                        id: passenger.id,
                        data: null,
                    },
                });
                return;
            }
        }
        //没有被选中，则选中当前座位(给passengers数组第一个座位为null的乘客)
        for (let passenger of orderState.passengers) {
            if (passenger.seatType === null) {
                dispatch({
                    type: 'updatePassengers',
                    name: 'seatType',
                    value: {
                        id: passenger.id,
                        data: {
                            seatLine: seatLine,
                            seatPosition: seatPosition,
                        },
                    },
                });
                return;
            }
        }
        //如果都不为null，则给到数组最后一个乘客
        dispatch({
            type: 'updatePassengers',
            name: 'seatType',
            value: {
                id: orderState.passengers[orderState.passengers.length - 1].id,
                data: {
                    seatLine: seatLine,
                    seatPosition: seatPosition,
                },
            },
        });
    };

    function createSeat(seatLine: number, seatPosition: string) {
        let active = false;
        for (let passenger of orderState.passengers) {
            if (
                passenger.seatType &&
                passenger.seatType.seatLine === seatLine &&
                passenger.seatType.seatPosition === seatPosition
            ) {
                active = true;
                break;
            }
        }
        return (
            <p
                className={classNames('seat', {
                    active: active,
                })}
                data-text={seatPosition}
                onClick={() => {
                    changeSeatStatus(seatLine, seatPosition);
                }}>
                &#xe02d;
            </p>
        );
    }
    return (
        <div className="choose">
            <p className="tip">在线选座</p>
            <div className="container">
                {orderState.passengers.map((item, index) => {
                    return (
                        <div className="seats" key={index}>
                            <div>窗</div>
                            {createSeat(index, 'A')}
                            {createSeat(index, 'B')}
                            {createSeat(index, 'C')}
                            <div>过道</div>
                            {createSeat(index, 'D')}
                            {createSeat(index, 'F')}
                            <div>窗</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Choose;
