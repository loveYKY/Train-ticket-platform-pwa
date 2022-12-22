import React, {useState} from 'react';
import './Acount.scss';
import classNames from 'classnames';
interface acountProps {
    price: number;
    length: number;
}

const Acount: React.FC<acountProps> = props => {
    const {price = 0, length} = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    const submetTicket = ()=>{
        //提交
        window.alert('订单已提交')
    }
    return (
        <div className="account">
            <div className={classNames('price', {expanded})} onClick={() => setExpanded(!expanded)}>
                <div className="money">{length * price}</div>
                <div className="amount">支付金额</div>
            </div>
            <div className="button" onClick={submetTicket}>提交按钮</div>
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
};

export default Acount;
