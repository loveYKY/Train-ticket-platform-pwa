/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect} from 'react';
import {useLocation} from 'react-router';
import {Header} from '@/components/header/header';
import Passengers from './components/Passengers/Passengers';
import './index.scss';
import {useStore} from './Store/useStore';
import {orderStateType, actionType} from './contant/index';
import {Detail} from '@/components/Detail/Detail';
import Choose from './components/Choose/Choose';
import Acount from './components/Acount/Acount';
interface OrderProps {}

interface reducerType {
    dispatch: React.Dispatch<actionType>;
}
type orderContextInterface = orderStateType & reducerType;

export const orderContext = createContext<orderContextInterface>({} as orderContextInterface);

export const Order: React.FC<OrderProps> = () => {
    const searchData = useLocation().state;
    const {orderState, dispatch} = useStore();

    const passContext: orderContextInterface = {
        ...orderState,
        dispatch,
    };
    useEffect(() => {
        dispatch({
            type: 'initState',
            name: '',
            value: {
                trainNumber: searchData.trainNumber,
                departStation: searchData.departStation,
                arriveStation: searchData.arriveStation,
                seat: searchData.type,
                departDate: searchData.departDate,
                arriveDate: searchData.arriveDate,
                departTimeStr: searchData.departTimeStr,
                arriveTimeStr: searchData.arriveTimeStr,
                durationStr: searchData.durationStr,
                price: searchData.priceMsg,
            },
        });
    }, []);
    return (
        <div>
            <div className="header-wrapper">
                <Header
                    title="订单填写"
                    onBack={() => {
                        window.history.back();
                    }}
                />
            </div>
            <div className="detail-wrapper">
                <Detail {...orderState}>
                    <span style={{display: 'block'}} className="train-icon"></span>
                </Detail>
            </div>
            <div className="ticket">
                <p>
                    <span className="ticket-type">{orderState.seat}</span>
                    <span className="ticket-price">{orderState.price}</span>
                </p>
                <div className="label">坐席</div>
            </div>
            <orderContext.Provider value={passContext}>
                <Passengers></Passengers>
                {orderState.passengers.length !== 0 && <Choose></Choose>}
                <Acount price={Number(orderState.price)} length={orderState.passengers.length}></Acount>
            </orderContext.Provider>
        </div>
    );
};
