import classNames from "classnames";
import React, { memo } from "react";
import "./Schedule.scss";
import leftPad from "left-pad";
interface ScheduleRowProps {
  index: number;
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

const ScheduleRow: React.FC<ScheduleRowProps> = memo((props) => {
  return (
    <li>
      <div
        className={classNames("icon", {
          "icon-red": props.isDepartStation || props.isArriveStation,
        })}
      >
        {props.isDepartStation
          ? "出"
          : props.isArriveStation
          ? "到"
          : leftPad(props.index, 2, 0)}
      </div>
      <div
        className={classNames("row", {
          grey: props.beforeDepartStation || props.afterArriveStation,
        })}
      >
        <span
          className={classNames("station", {
            red: props.isArriveStation || props.isDepartStation,
          })}
        >
          {props.station}
        </span>
        <span
          className={classNames("arrtime", {
            red: props.isArriveStation,
          })}
        >
          {props.isStartStation ? "始发站" : props.arriveTime}
        </span>
        <span
          className={classNames("deptime", {
            red: props.isDepartStation,
          })}
        >
          {props.isEndStation ? "终到站" : props.departTime}
        </span>
        <span className="stoptime">
          {props.isStartStation || props.isEndStation ? "-" : props.stay + "分"}
        </span>
      </div>
    </li>
  );
});

export default ScheduleRow;
