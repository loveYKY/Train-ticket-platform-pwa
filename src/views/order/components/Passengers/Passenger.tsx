import React, {memo, useContext, useEffect, useState} from 'react';
import {orderContext} from '../../index';
import {passenger} from '../../contant';
import {throttle} from 'lodash';

interface Ipassenger {
    showGenderMenu: (type: string, id: number) => void;
    showFollowAdultMenu: (type: string, id: number) => void;
}

type passengerProps = Ipassenger & passenger;

const Passenger: React.FC<passengerProps> = memo(props => {
    const {id, licenceNo, name, seat, ticketType, gender, birthday, followAdult, showGenderMenu, showFollowAdultMenu} =
        props;

    const {dispatch, ...orderState} = useContext(orderContext);

    const [followAdultName, setFollowAdultName] = useState<string>('');

    useEffect(() => {
        if (ticketType !== 'adult') {
            let name = orderState.passengers.filter(item => {
                return item.id === followAdult;
            })[0].name;

            setFollowAdultName(name);
        }
    }, [followAdult, orderState.passengers, ticketType]);

    const onRemove = () => {
        //如果删除的是成人乘客，则要删除对应的儿童乘客
        if (ticketType === 'adult') {
            for (let passenger of orderState.passengers) {
                //删除对应的儿童乘客
                if (passenger.ticketType === 'child' && passenger.followAdult === id) {
                    dispatch({
                        type: 'deletePassengers',
                        name: '',
                        value: passenger.id,
                    });
                }
            }
        }
        dispatch({
            type: 'deletePassengers',
            name: '',
            value: id,
        });
    };
    const onUpdate = throttle((type: string, value: string) => {
        dispatch({
            type: 'updatePassengers',
            name: type,
            value: {
                id: id,
                data: value,
            },
        });
    }, 100);
    return (
        <li className="passenger">
            <i className="delete" onClick={onRemove}>
                —
            </i>
            <ol className="items">
                <li className="item">
                    <label className="label name">姓名</label>
                    <input
                        type="text"
                        className="input name"
                        placeholder="乘客姓名"
                        value={name}
                        onChange={e => {
                            onUpdate('name', e.target.value);
                        }}
                    />
                    <label className="ticket-type">{ticketType === 'adult' ? '成人票' : '儿童票'}</label>
                </li>
                {ticketType === 'adult' && (
                    <li className="item">
                        <label className="label licenceNo">身份证</label>
                        <input
                            type="text"
                            className="input licenceNo"
                            placeholder="证件号码"
                            value={licenceNo}
                            onChange={e => onUpdate('licenceNo', e.target.value)}
                        />
                    </li>
                )}
                {ticketType !== 'adult' && (
                    <li className="item arrow">
                        <label className="label gender">性别</label>
                        <input
                            type="text"
                            className="input gender"
                            placeholder="请选择"
                            onClick={() => showGenderMenu('gender', id)}
                            value={gender === 'male' ? '男' : gender === 'female' ? '女' : ''}
                            readOnly
                        />
                    </li>
                )}
                {ticketType !== 'adult' && (
                    <li className="item">
                        <label className="label birthday">出生日期</label>
                        <input
                            type="text"
                            className="input birthday"
                            placeholder="如 19951015"
                            value={birthday}
                            onChange={e => onUpdate('birthday', e.target.value)}
                        />
                    </li>
                )}
                {ticketType !== 'adult' && (
                    <li className="item arrow">
                        <label className="label followAdult">同行成人</label>
                        <input
                            type="text"
                            className="input followAdult"
                            placeholder="请选择"
                            value={followAdultName}
                            onClick={() => showFollowAdultMenu('followAdult', id)}
                            readOnly
                        />
                    </li>
                )}
            </ol>
        </li>
    );
});

export default Passenger;
