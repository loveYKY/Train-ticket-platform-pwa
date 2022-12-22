import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Header } from "../../components/header/header";
import { Nav } from "../../components/Nav/Nav";
import { List } from "./components/List/List";
import { Bottom } from "./components/Bottom/Bottom";
import { searchStateInterFace, filterState } from "./constant/index";
import { fetchUrl } from "../../constant";
import { timeTranslate } from "@/hooks/timeTranslate";
import moment from "moment";

interface queryProps {}

export const QueryPage: React.FC<queryProps> = (props) => {
  const searchData = useLocation();
  const navigator = useNavigate();

  const [searchState, setSearchState] = useState<searchStateInterFace>({
    from: searchData.state.from,
    to: searchData.state.to,
    departDate: searchData.state.departDate,
    highSpeed: searchData.state.highSpeed,
    orderType: 1,
    onlyTickets: false,
    checkedTicketTypes: {},
    checkedTrainTypes: {},
    checkedDepartStations: {},
    checkedArriveStations: {},
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
  });

  const [filterState, setFilterState] = useState<filterState>({
    trainList: [],
    ticketTypes: [],
    trainTypes: [],
    departStations: [],
    arriveStations: [],
    isFiltersVisible: false,
  });

  //过滤条件数据初始化
  const initFilterData = async () => {
    let res = await fetch(fetchUrl + "/rest/query", {
      method: "POST",
      body: JSON.stringify(searchState),
    });
    if (res.status === 200) {
      res.json().then((data) => {
        const res = data.dataMap.directTrainInfo;
        //更新过滤数据
        setFilterState({
          trainList: res.trains,
          ticketTypes: res.filter.ticketType,
          trainTypes: res.filter.trainType,
          departStations: res.filter.depStation,
          arriveStations: res.filter.arrStation,
          isFiltersVisible: false,
        });
      });
    }
  };

  //渲染后请求数据
  useEffect(() => {
    initFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState]);

  //头部返回按钮事件函数
  const onBack = () => {
    navigator("/main");
  };
  //点击前一天事件函数
  const isPrevDisabled =
    timeTranslate(searchState.departDate) <= timeTranslate();
  const datePrev = () => {
    if (!isPrevDisabled) {
      //时间减少一天
      const time = moment(searchState.departDate)
        .subtract(1, "days")
        .format("x");

      setSearchState({
        ...searchState,
        departDate: Number(time),
      });
    }
  };
  //点击后一天事件函数
  const isNextDisabled =
    timeTranslate(searchState.departDate) - timeTranslate() > 20 * 86400 * 1000;
  const dateNext = () => {
    if (!isNextDisabled) {
      //时间增加一天
      const time = moment(searchState.departDate).add(1, "days").format("x");

      setSearchState({
        ...searchState,
        departDate: Number(time),
      });
    }
  };

  //筛选条件改变时的回调函数
  const searchStateChange = (value: searchStateInterFace) => {
    setSearchState(value);
  };

  return (
    <div>
      <div className="header-wrapper">
        <Header
          title={`${searchState.from} ⇀ ${searchState.to}`}
          onBack={onBack}
        />
      </div>
      <div>
        <Nav
          date={searchState.departDate}
          prev={datePrev}
          next={dateNext}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
        ></Nav>
        <List trainList={filterState.trainList}></List>
        <Bottom
          searchState={searchState}
          filterState={filterState}
          searchStateChange={searchStateChange}
          onCloseFilter={() => {
            let temp = filterState.isFiltersVisible;
            setFilterState({
              ...filterState,
              isFiltersVisible: !temp,
            });
          }}
        ></Bottom>
      </div>
    </div>
  );
};
