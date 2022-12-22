/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {memo, useContext, useState} from 'react';
import {useNavigate} from 'react-router';
import {candidatesType} from '../../constant/index';
import {TicketContext} from '../../index';
const Seat: React.FC<candidatesType> = memo(props => {
    const {channels, priceMsg, ticketsLeft, type} = props;
    const [expanded, setExpanded] = useState<boolean>(false);
    const navigator = useNavigate();
    const {...dataState} = useContext(TicketContext);

    const changeExpanded = () => {
        setExpanded(cur => {
            return !cur;
        });
    };

    const buyTicket = () => {
        navigator('/order', {
            state: {
                ...dataState,
                type: type,
                priceMsg: priceMsg,
            },
        });
    };
    return (
        <li>
            <div className="bar" onClick={changeExpanded}>
                <span className="seat">{type}</span>
                <span className="price">
                    <i>￥</i>
                    {priceMsg}
                </span>
                <span className="btn">{expanded ? '预订' : '收起'}</span>
                <span className="num">{ticketsLeft}</span>
            </div>
            <div
                className="channels"
                style={{
                    height: expanded ? channels.length * 55 + 'px' : 0,
                }}>
                {channels.map(channel => {
                    return (
                        <div className="channel" key={channel.name}>
                            <div className="middle">
                                <div className="name">{channel.name}</div>
                                <div className="desc">{channel.desc}</div>
                            </div>
                            <div className="buy-wrapper">
                                <div className="buy" onClick={buyTicket}>
                                    买票
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </li>
    );
});

export default Seat;
