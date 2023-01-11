import {cloneDeep} from 'lodash';
import {useReducer} from 'react';
import {orderStateType, actionType} from '../contant';

let passengersId = 0;
const orderReducer = (state: orderStateType, action: actionType): any => {
    switch (action.type) {
        case 'initState':
            return {
                ...state,
                ...action.value,
            };
        case 'updateState':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'addPassengers':
            let temp = cloneDeep(state.passengers);
            temp.push({
                ...action.value,
                id: ++passengersId,
            });
            return {
                ...state,
                passengers: temp,
            };
        /** action.value = id */    
        case 'deletePassengers':
            let temp2 = cloneDeep(state.passengers);
            temp2 = temp2.filter(item => {
                return item.id !== action.value;
            });
            return {
                ...state,
                passengers: temp2,
            };
        /** action.value:{id,data} */
        case 'updatePassengers':
            return {
                ...state,
                passengers: state.passengers.map(item => {
                    if (item.id === action.value.id) {
                        item[action.name] = action.value.data;
                        return item;
                    } else {
                        return item;
                    }
                }),
            };
        default:
            return state;
    }
};

export const useStore = () => {
    const [orderState, dispatch] = useReducer(orderReducer, {
        trainNumber: null,
        departStation: null,
        arriveStation: null,
        seatType: null,
        departDate: Date.now(),
        arriveDate: Date.now(),
        departTimeStr: null,
        arriveTimeStr: null,
        durationStr: null,
        price: null,
        passengers: [],
    });

    return {
        orderState,
        dispatch,
    };
};
