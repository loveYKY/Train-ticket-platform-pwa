import React, {  } from "react";
import "./Bottom.scss";
import { BottomModal } from "./BottomModal";
import { filterState, searchStateInterFace } from "../../constant/index";
import { cloneDeep } from "lodash";
import classNames from "classnames";
interface BottomProps {
  searchState: searchStateInterFace;
  filterState: filterState;
  onCloseFilter: () => void;
  searchStateChange: (value: searchStateInterFace) => void;
}

export const Bottom: React.FC<BottomProps> = (props) => {
  const { searchState, filterState, onCloseFilter, searchStateChange } = props;

  const cloneState = cloneDeep(searchState);
  const noChecked =
    Object.keys(cloneState["checkedTicketTypes"]).length === 0 &&
    Object.keys(cloneState["checkedTrainTypes"]).length === 0 &&
    Object.keys(cloneState["checkedDepartStations"]).length === 0 &&
    Object.keys(cloneState["checkedArriveStations"]).length === 0;

  //查询信息改变的事件函数
  const toggleChange = (type: string) => {
    switch (type) {
      case "order":
        if (cloneState.orderType === 1) {
          cloneState.orderType = 2;
        } else {
          cloneState.orderType = 1;
        }
        break;
      case "highSpeed":
        cloneState.highSpeed = !cloneState.highSpeed;
        break;
      case "onlyTicket":
        cloneState.onlyTickets = !cloneState.onlyTickets;
        break;
    }
    searchStateChange(cloneState);
  };

  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={() => toggleChange("order")}>
          <i className="icon">&#xf065;</i>
          {cloneState.orderType === 1 ? "出发 早→晚" : "耗时 短→长"}
        </span>
        <span
          className={classNames("item", { "item-on": cloneState.highSpeed })}
          onClick={() => toggleChange("highSpeed")}
        >
          <i className="icon">{cloneState.highSpeed ? "\uf43f" : "\uf43e"}</i>
          只看高铁动车
        </span>
        <span
          className={classNames("item", { "item-on": cloneState.onlyTickets })}
          onClick={() => toggleChange("onlyTicket")}
        >
          <i className="icon">{cloneState.onlyTickets ? "\uf43d" : "\uf43c"}</i>
          只看有票
        </span>
        <span
          className={classNames("item", {
            "item-on": filterState.isFiltersVisible || !noChecked,
          })}
          onClick={onCloseFilter}
        >
          <i className="icon">{noChecked ? "\uf0f7" : "\uf446"}</i>
          综合筛选
        </span>
      </div>

      {filterState.isFiltersVisible && (
        <BottomModal
          filterState={filterState}
          searchState={cloneState}
          onStateChange={(value: searchStateInterFace) => {
            searchStateChange(value);
          }}
        ></BottomModal>
      )}
    </div>
  );
};
