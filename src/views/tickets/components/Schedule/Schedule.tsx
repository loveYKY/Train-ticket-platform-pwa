/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import "./Schedule.scss";
import { fetchUrl } from "@/constant/index";
import ScheduleRow from "./ScheduleRow";

interface ScheduleProps {
  date: number;
  trainNumber: string;
  departStation: string;
  arriveStation: string;
}

interface scheduleList {
  station: string;
  arriveTime: string;
  departTime: string;
  stay: string;

  isStartStation: boolean;
  isEndStation: boolean;
  isDepartStation: boolean;
  isArriveStation: boolean;
  beforeDepartStation: string;
  afterArriveStation: string;
}

const Schedule: React.FC<ScheduleProps> = memo((props) => {
  const { date, trainNumber, departStation, arriveStation } = props;
  const [scheduleList, setScheduleList] = useState<scheduleList[]>([]);
  const getData = async () => {
    const res = await fetch(
      `${fetchUrl}/rest/schedule?trainNumber=${trainNumber}&date=${date}&departStation=${departStation}&arriveStation=${arriveStation}`,
      {
        method: "GET",
      }
    );
    if (res.status === 200) {
      res.json().then((data) => {
        let departRow;
        let arriveRow;

        for (let i = 0; i < data.length; ++i) {
          //如果还没找到出发车站
          if (!departRow) {
            //当前项车站等于出发车站
            if (data[i].station === departStation) {
              departRow = Object.assign(data[i], {
                beforeDepartStation: false,
                isDepartStation: true,
                afterArriveStation: false,
                isArriveStation: false,
              });
            } else {
              //否则该车站在出发车站之前
              Object.assign(data[i], {
                beforeDepartStation: true,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: false,
              });
            }
          }
          //如果还未找到到达车站
          else if (!arriveRow) {
            //如果当前项是到达车站
            if (data[i].station === arriveStation) {
              arriveRow = Object.assign(data[i], {
                beforeDepartStation: false,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: true,
              });
            } else {
              Object.assign(data[i], {
                beforeDepartStation: false,
                isDepartStation: false,
                afterArriveStation: false,
                isArriveStation: false,
              });
            }
          }
          //出发车站和到达车站都找了，则之后车站都是到达车站以后的车站
          else {
            Object.assign(data[i], {
              beforeDepartStation: false,
              isDepartStation: false,
              afterArriveStation: true,
              isArriveStation: false,
            });
          }

          //如果当前项是第一项，则是始发站，如果是最后一项，就是终止站
          Object.assign(data[i], {
            isStartStation: i === 0,
            isEndStation: i === data.length - 1,
          });
        }
        setScheduleList(() => {
          return data;
        });
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="schedule">
      <div className="dialog">
        <h1>列车时刻表</h1>
        <div className="head">
          <span className="station">车站</span>
          <span className="deptime">到达</span>
          <span className="arrtime">发车</span>
          <span className="stoptime">停留时间</span>
        </div>
        <ul>
          {scheduleList.map((schedule, index) => {
            return (
              <ScheduleRow
                key={schedule.station}
                index={index + 1}
                {...schedule}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Schedule;
