import React, {memo, useContext, useState} from 'react';
import './Acount.scss';
import classNames from 'classnames';
import {orderContext} from '../../index';
interface acountProps {
    price: number;
    length: number;
}

const Acount: React.FC<acountProps> = memo(props => {
    const {price = 0, length} = props;
    const {dispatch, ...orderState} = useContext(orderContext);
    const [expanded, setExpanded] = useState<boolean>(false);

    const submetTicket = () => {
        //验证数据
        let _IDRe18 = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        let birthday = /^(19|20)\d{2}(1[0-2]|0[1-9])(0[1-9]|[1-2][0-9]|3[0-1])$/;
        for (let passenger of orderState.passengers) {
            // console.log(_IDRe18.test(passenger.licenceNo));
            if (passenger.licenceNo !== undefined && !_IDRe18.test(passenger.licenceNo)) {
                window.alert('身份证号码有误，请检查');
                return;
            }
            if (passenger.birthday !== undefined && !birthday.test(passenger.birthday)) {
                window.alert('生日信息有误，请检查');
                return;
            }
            if (passenger.seatType == null) {
                window.alert('请选择座位');
                return;
            }
        }
        window.alert('订单已提交');
    };
    return (
        <div className="account">
            <div className={classNames('price', {expanded})} onClick={() => setExpanded(!expanded)}>
                <div className="money">{length * price}</div>
                <div className="amount">支付金额</div>
            </div>
            <div className="button" onClick={submetTicket}>
                提交按钮
            </div>
            <div className={classNames('layer', {hidden: !expanded})} onClick={() => setExpanded(false)}></div>
            <div className={classNames('detail', {hidden: !expanded})}>
                <div className="title">金额详情</div>
                <ul>
                    <li>
                        <span>火车票</span>
                        <span>￥{price}</span>
                        <span>&#xD7;{length}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
});

export default Acount;
