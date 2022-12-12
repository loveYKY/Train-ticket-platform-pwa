import React, { useCallback, useEffect, useState } from "react";
import "./index.scss";

import { Header } from "../../components/header/header";
import { DepartDate } from "./components/DepartDate/DepartDate";
import { HighSpeed } from "./components/HighSpeed/HighSpeed";
import { Journey } from "./components/Journey/Journey";
import { Submit } from "./components/Submit/Submit";
import { CitySelector } from "../../components/CitySelector/CitySelector";
import { fetchUrl } from "../../constant";
export interface mainProps {}

export interface MainStateInterFace {
  from: string;
  to: string;
  isCitySelectorVisible: boolean;
  currentSelectingLeftCity: boolean;
  cityData: any;
  isLoadingCityData: boolean;
  isDateSelectorVisible: boolean;
  departDate: number;
  highSpeed: boolean;
}

export const Main: React.FC<mainProps> = (props) => {
  const [mainState, setMainState] = useState<MainStateInterFace>({
    from: "北京",
    to: "上海",
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false,
  });

  //请求城市列表接口
  const fetchCityData = async () => {
    setMainState({
      ...mainState,
      isLoadingCityData: true,
    });
    let res = await fetch(fetchUrl + "/rest/cities");
    if (res.status === 200) {
      res.json().then((data) => {
        setMainState({
          ...mainState,
          cityData: data,
          isLoadingCityData: false,
        });
      });
    } else {
      setMainState({
        ...mainState,
        isLoadingCityData: false,
      });
    }
  };

  //渲染后请求cityData
  useEffect(() => {
    if (mainState.cityData == null) {
      fetchCityData();
    }
  }, []);

  //展示城市选择浮层
  const showCitySelector = useCallback(
    (visible: boolean, currentSelectingLeftCity: boolean) => {
      setMainState({
        ...mainState,
        isCitySelectorVisible: visible,
        currentSelectingLeftCity: currentSelectingLeftCity,
      });
    },
    [mainState]
  );

  //交换出发和终点目的地
  const exchangeFromTo = useCallback(() => {
    let left = mainState.from;
    let right = mainState.to;
    setMainState({
      ...mainState,
      to: left,
      from: right,
    });
  }, [mainState]);

  //选中城市回调函数，修改出发和目的地
  const handleCitySelect = useCallback(
    (data: string) => {
      if (mainState.currentSelectingLeftCity) {
        setMainState({
          ...mainState,
          isCitySelectorVisible: false,
          from: data,
        });
      } else {
        setMainState({
          ...mainState,
          isCitySelectorVisible: false,
          to: data,
        });
      }
    },
    [mainState]
  );

  //点击日期控件，弹出日期选择浮层
  const showDateSelector = useCallback(
    (visible: boolean) => {
      setMainState({
        ...mainState,
        isDateSelectorVisible: visible,
      });
      console.log(mainState);
    },
    [mainState]
  );

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票"></Header>
      </div>
      <div className="form">
        <Journey
          from={mainState.from}
          to={mainState.to}
          showCitySelector={showCitySelector}
          exchangeFromTo={exchangeFromTo}
        ></Journey>
        <DepartDate
          time={mainState.departDate}
          showDepartDate={showDateSelector}
        ></DepartDate>
      </div>
      {mainState.isCitySelectorVisible && (
        <CitySelector
          cityData={mainState.cityData}
          isLoading={mainState.isLoadingCityData}
          closeCitySelector={() => {
            setMainState({
              ...mainState,
              isCitySelectorVisible: false,
            });
          }}
          onSelect={handleCitySelect}
        ></CitySelector>
      )}
    </div>
  );
};
