import React, {useContext, useState} from 'react';
import './Passengers.scss';
import {orderContext} from '../../index';
import Passenger from './Passenger';
import Menu from '../Menu/Menu';
interface passengersProps {}
interface optionType {
    title: string;
    value: string | number;
}
interface infoType {
    id: number;
    type: string;
    options: optionType[];
}
const Passengers: React.FC<passengersProps> = props => {
    const {dispatch, ...orderState} = useContext(orderContext);

    const [menuInfo, setmenuInfo] = useState<infoType>({
        id: -1,
        type: '',
        options: [],
    });
    const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

    //创建成人信息
    const createAdult = () => {
        let passengers = orderState.passengers;
        for (let passenger of passengers) {
            let keys = Object.keys(passenger);
            for (let key of keys) {
                if (key !== 'seatType' && !passenger[key]) {
                    window.alert('请先完善当前个人信息');
                    return;
                }
            }
        }
        dispatch({
            type: 'addPassengers',
            name: '',
            value: {
                name: '',
                ticketType: 'adult',
                licenceNo: '',
                seatType: null,
            },
        });
    };

    //创建小孩信息
    const createChild = () => {
        let passengers = orderState.passengers;
        let haveAdult = false;
        let adultFound = -1;
        for (let passenger of passengers) {
            if (passenger.ticketType === 'adult') {
                adultFound = passenger.id;
                haveAdult = true;
            }
            let keys = Object.keys(passenger);
            for (let key of keys) {
                if (key !== 'seatType' && !passenger[key]) {
                    window.alert('请先完善当前个人信息');
                    return;
                }
            }
        }
        if (!haveAdult) {
            window.alert('请添加至少一个同行成人');
            return;
        }
        dispatch({
            type: 'addPassengers',
            name: '',
            value: {
                name: '',
                gender: 'none',
                birthday: '',
                followAdult: adultFound,
                ticketType: 'child',
                seatType: null,
            },
        });
    };

    //显示性别选择菜单
    const showGenderMenu = (type: string, id: number) => {
        setmenuInfo({
            id: id,
            type: type,
            options: [
                {
                    title: '男',
                    value: 'male',
                },
                {
                    title: '女',
                    value: 'female',
                },
            ],
        });
        setMenuVisible(true);
    };

    //显示同行成人菜单
    const showFollowAdultMenu = (type: string, id: number) => {
        let temp = orderState.passengers
            .filter(item => {
                return item.ticketType === 'adult';
            })
            .map(item => {
                return {
                    title: item.name,
                    value: item.id,
                };
            });
        setmenuInfo({
            id: id,
            type: type,
            options: temp,
        });
        setMenuVisible(true);
    };

    return (
        <div className="passengers">
            <ul>
                {orderState.passengers.map(passenger => {
                    return (
                        <Passenger
                            {...passenger}
                            key={passenger.id}
                            showGenderMenu={showGenderMenu}
                            showFollowAdultMenu={showFollowAdultMenu}></Passenger>
                    );
                })}
            </ul>
            <section>
                <div className="add">
                    <div className="adult" onClick={createAdult}>
                        添加成人
                    </div>
                    <div className="child" onClick={createChild}>
                        添加儿童
                    </div>
                </div>
            </section>

            <Menu
                show={isMenuVisible}
                info={menuInfo}
                onPress={(id: number, type: string, value: any) => {
                    dispatch({
                        type: 'updatePassengers',
                        name: type,
                        value: {
                            id: id,
                            data: value,
                        },
                    });
                    setMenuVisible(false);
                }}
                hideMenu={() => {
                    setMenuVisible(false);
                }}></Menu>
        </div>
    );
};

export default Passengers;
