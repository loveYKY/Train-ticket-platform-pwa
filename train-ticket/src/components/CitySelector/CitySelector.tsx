import React, { memo, useMemo, useState } from "react";
import "./CitySelector.scss";
import classNames from "classnames";
import { CityList } from "./components/CityList";
import { throttle } from "lodash";
import { sectionType, citysType } from "./components/CityList";

interface CitySelectorProps {
  cityData: any;
  isLoading: boolean;
  closeCitySelector: (visible: boolean) => void;
  onSelect: (data: string) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = memo((props) => {
  const { cityData, isLoading, closeCitySelector, onSelect } = props;

  const [searchKey, setSearchKey] = useState("");

  //修改cityData数据结构
  const cityListData = useMemo(() => {
    return cityData.cityList.map((item: any) => {
      return {
        ...item,
        title: item.title ? item.title : "",
        citys: item.citys ? item.citys : [],
      };
    });
  }, [cityData]);

  //根据searchKey筛选城市数据
  const citySearchData = useMemo(() => {
    let temp = cityListData.map((item: sectionType) => {
      return {
        title: item.title,
        citys: item.citys.filter((childItem: citysType) => {
          return childItem.name.indexOf(searchKey) !== -1;
        }),
      };
    });
    return temp.filter((item: any) => {
      return item.citys.length !== 0;
    });
  }, [cityListData, searchKey]);

  //渲染城市列表
  const renderCityList = () => {
    if (!cityData && isLoading) {
      return <div>loading....</div>;
    } else {
      return (
        <CityList sections={citySearchData} onSelect={onSelect}></CityList>
      );
    }
  };

  //输入框searchKey改变事件
  const handleSearchChange = throttle(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKey(e.target.value);
    },
    100
  );

  //关闭浮层
  const onBack = () => {
    closeCitySelector(false);
  };
  return (
    <div className="city-selector">
      <div className="city-search">
        <div className="search-back" onClick={onBack}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={handleSearchChange}
          />
        </div>
        <i
          onClick={() => {
            setSearchKey("");
          }}
          className={classNames("search-clean", {
            hidden: searchKey.trim().length === 0,
          })}
        >
          &#xf063;
        </i>
      </div>
      {renderCityList()}
    </div>
  );
});
