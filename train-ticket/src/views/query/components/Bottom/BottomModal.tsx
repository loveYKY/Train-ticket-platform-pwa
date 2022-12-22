import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  filterState,
  searchStateInterFace,
  keyType,
  keyNameMap,
  checkKeyMap,
  checkMapType,
} from "../../constant/index";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { Slider } from "@/components/Slider/Slider";
interface BottomModalProps {
  filterState: filterState;
  searchState: searchStateInterFace;
  onStateChange: (value: searchStateInterFace) => void;
}

export const BottomModal: React.FC<BottomModalProps> = (props) => {
  const { filterState, searchState, onStateChange } = props;
  const [cloneState, setCloneState] = useState<searchStateInterFace>(
    cloneDeep(searchState)
  );

  //点击选项，更新cloneState的值
  const changeState = (key: string, option: any) => {
    let newState = cloneDeep(cloneState);
    let obj = null;
    //根据key选择对应的属性
    switch (key) {
      case "ticketTypes":
        obj = newState["checkedTicketTypes"];
        break;
      case "trainTypes":
        obj = newState["checkedTrainTypes"];
        break;
      case "departStations":
        obj = newState["checkedDepartStations"];
        break;
      case "arriveStations":
        obj = newState["checkedArriveStations"];
        break;
    }
    if (obj) {
      if (obj.hasOwnProperty(option.name)) {
        delete obj[option.name];
      } else {
        obj[option.name] = option.value;
      }
    }
    //更新cloneState
    setCloneState(newState);
  };

  const renderOption = useCallback(() => {
    let keys = Object.keys(filterState);
    return keys.map((key, index) => {
      if (key === "trainList" || key === "isFiltersVisible") {
        return null;
      }
      return (
        <div className="option" key={key}>
          <h3>{keyNameMap[key as keyType]}</h3>
          <ul>
            {filterState[key as keyType].map((option) => {
              //判断option属于哪一个checkedMap
              let obj = cloneState[checkKeyMap[key as keyType] as checkMapType];
              return (
                <li
                  key={option.name}
                  className={classNames({
                    checked: obj.hasOwnProperty(option.name),
                  })}
                  onClick={() => {
                    changeState(key, option);
                  }}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloneState, filterState]);

  //确认时触发onStateChange事件。并向上层传入修改后的数据
  const makeSure = () => {
    onStateChange(cloneState);
  };

  const handleTimeChange = (type: string, value: number) => {
    let obj = cloneDeep(cloneState);
    switch (type) {
      case "departTimeStart":
        obj["departTimeStart"] = value;
        break;
      case "departTimeEnd":
        obj["departTimeEnd"] = value;
        break;
      case "arriveTimeStart":
        obj["arriveTimeStart"] = value;
        break;
      case "arriveTimeEnd":
        obj["arriveTimeEnd"] = value;
        break;
    }
    setCloneState(obj);
  };

  const reset = () => {
    setCloneState({
      ...cloneState,
      checkedTicketTypes: {},
      checkedTrainTypes: {},
      checkedDepartStations: {},
      checkedArriveStations: {},
      departTimeStart: 0,
      departTimeEnd: 24,
      arriveTimeStart: 0,
      arriveTimeEnd: 24,
    });
  };

  const isResetDisabled = useMemo(() => {
    if (
      Object.keys(cloneState["checkedTicketTypes"]).length === 0 &&
      Object.keys(cloneState["checkedTrainTypes"]).length === 0 &&
      Object.keys(cloneState["checkedDepartStations"]).length === 0 &&
      Object.keys(cloneState["checkedArriveStations"]).length === 0 &&
      cloneState["arriveTimeStart"] === 0 &&
      cloneState["arriveTimeEnd"] === 24 &&
      cloneState["departTimeStart"] === 0 &&
      cloneState["departTimeEnd"] === 24
    ) {
      return true;
    } else {
      return false;
    }
  }, [cloneState]);

  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span
              className={classNames("reset", { disabled: isResetDisabled })}
              onClick={reset}
            >
              重置
            </span>
            <span className="ok" onClick={makeSure}>
              确定
            </span>
          </div>
          <div className="options">
            {renderOption()}
            <Slider
              title="出发时间"
              timeStart={cloneState.departTimeStart}
              timeEnd={cloneState.departTimeEnd}
              onStartTimeChange={(time) =>
                handleTimeChange("departTimeStart", time)
              }
              onEndTimeChange={(time) =>
                handleTimeChange("departTimeEnd", time)
              }
            ></Slider>
            <Slider
              title="到达时间"
              timeStart={cloneState.arriveTimeStart}
              timeEnd={cloneState.arriveTimeEnd}
              onStartTimeChange={(time) =>
                handleTimeChange("arriveTimeStart", time)
              }
              onEndTimeChange={(time) =>
                handleTimeChange("arriveTimeEnd", time)
              }
            ></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
