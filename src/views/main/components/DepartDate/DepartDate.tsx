import React, { useMemo } from "react";
import "./DepartDate.scss";
import { timeTranslate } from "../../../../hooks/timeTranslate";
import moment from "moment";

export interface DepartDateProps {
  time: number;
  showDepartDate: (visible: boolean) => void;
}

export const DepartDate: React.FC<DepartDateProps> = (props) => {
  const { time, showDepartDate } = props;

  const dayTime = useMemo(() => {
    return moment(timeTranslate(time)).format("YYYY-MM-DD");
  }, [time]);

  const isToday = timeTranslate(time) === timeTranslate();

  const weekString =
    "周" +
    ["日", "一", "二", "三", "四", "五", "六"][
      moment(timeTranslate(time)).weekday()
    ] +
    (isToday ? "(今天)" : "");

  return (
    <div className="depart-date" onClick={()=>{showDepartDate(true)}}>
      <input type="hidden" name="date" value={dayTime} />
      {dayTime}
      <span className="depart-week">{weekString}</span>
    </div>
  );
};
