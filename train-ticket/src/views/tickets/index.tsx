import React, {createContext, lazy, Suspense, useEffect, useState} from 'react';
import './index.scss';
import {dataStateInterface} from './constant/index';
import {useLocation, useNavigate} from 'react-router';
import moment from 'moment';
import {fetchUrl} from '../../constant';
import {Header} from '@/components/header/header';
import {Detail} from '@/components/Detail/Detail';
import Candidate from './components/Candidate/Candidate';
const Schedule = lazy(() => {
    return import('./components/Schedule/Schedule');
});
interface ticketPageProps {}

export const TicketContext = createContext<dataStateInterface>({} as dataStateInterface);

export const TicketPage: React.FC<ticketPageProps> = props => {
    const detailParams = useLocation();
    const detailInfo = detailParams.state;

    const [dataState, setDataState] = useState<dataStateInterface>({
        departDate: Number(moment(detailInfo.date).format('x')),
        arriveDate: 0,
        departTimeStr: '',
        arriveTimeStr: '',
        departStation: detailInfo.dStation,
        arriveStation: detailInfo.aStation,
        trainNumber: detailInfo.trainNumber,
        durationStr: '',
        tickets: [],
        isScheduleVisible: false,
    });

    const getData = async () => {
        const res = await fetch(
            `${fetchUrl}/rest/ticket?date=${moment(dataState.departDate).format('YYYY-MM-DD')}&trainNumber=${
                dataState.trainNumber
            }`,
            {
                method: 'GET',
            },
        );
        if (res.status === 200) {
            res.json().then(data => {
                //更新数据
                setDataState({
                    ...dataState,
                    arriveDate: data.detail.arriveDate,
                    departTimeStr: data.detail.departTimeStr,
                    arriveTimeStr: data.detail.arriveTimeStr,
                    durationStr: data.detail.durationStr,
                    tickets: data.candidates,
                });
            });
        }
    };
    useEffect(() => {
        getData();
    }, []);

    //点击时刻表的回调函数
    const showSchedule = () => {
        let temp = dataState.isScheduleVisible;
        setDataState({
            ...dataState,
            isScheduleVisible: !temp,
        });
    };
    return (
        <div>
            <div className="header-wrapper">
                <Header
                    title={dataState.trainNumber}
                    onBack={() => {
                        window.history.back();
                    }}></Header>
            </div>
            <div className="detail-wrapper">
                <Detail {...dataState}>
                    <span className="left"></span>
                    <span className="schedule" onClick={showSchedule}>
                        时刻表
                    </span>
                    <span className="right"></span>
                </Detail>
            </div>
            <TicketContext.Provider value={dataState}>
                <Candidate candidates={dataState.tickets}></Candidate>
            </TicketContext.Provider>
            {dataState.isScheduleVisible && (
                <div className="mask" onClick={showSchedule}>
                    <Suspense fallback={<div>loading...</div>}>
                        <Schedule
                            date={dataState.departDate}
                            trainNumber={dataState.trainNumber}
                            departStation={dataState.departStation}
                            arriveStation={dataState.arriveStation}
                        />
                    </Suspense>
                </div>
            )}
        </div>
    );
};
