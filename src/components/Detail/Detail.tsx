import moment from 'moment';
import React, {memo} from 'react';
import './Detail.scss';
interface detailProps {
    departDate: number;
    arriveDate: number;
    departTimeStr: string;
    arriveTimeStr: string;
    trainNumber: string;
    departStation: string;
    arriveStation: string;
    durationStr: string;
    children: JSX.Element[];
    [key: string]: any;
}

export const Detail: React.FC<detailProps> = memo(props => {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        trainNumber,
        departStation,
        arriveStation,
        durationStr,
        children,
    } = props;
    return (
        <div className="detail">
            <div className="content">
                <div className="left">
                    <p className="city">{departStation}</p>
                    <p className="time">{departTimeStr}</p>
                    <p className="date">{moment(departDate).format('YYYY-MM-DD')}</p>
                </div>
                <div className="middle">
                    <p className="train-name">{trainNumber}</p>
                    <p className="train-mid">{children}</p>
                    <p className="train-time">耗时{durationStr}</p>
                </div>
                <div className="right">
                    <p className="city">{arriveStation}</p>
                    <p className="time">{arriveTimeStr}</p>
                    <p className="date">{moment(arriveDate).format('YYYY-MM-DD')}</p>
                </div>
            </div>
        </div>
    );
});
