import React, { memo, useCallback } from "react";
import { CitySection } from "./CitySection";
import { AlphaIndex } from "./AlphaIndex";
export interface citysType {
  name: string;
  [key: string]: any;
}

export interface sectionType {
  title: string;
  citys: citysType[];
  [key: string]: any;
}

interface CityListProps {
  sections: sectionType[];
  onSelect: (data: string) => void;
}

export const CityList: React.FC<CityListProps> = memo(function CityList(props) {
  const { sections, onSelect } = props;

  const alpha = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
  });

  const handleAlphaClick = useCallback((alpha: string) => {
    document.querySelector(`[data-cate='${alpha}']`)?.scrollIntoView();
  }, []);

  return (
    <div className="city-list">
      <div className="city-cate">
        {sections.map((section) => {
          return (
            <CitySection
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      <div className="city-index">
        {alpha.map((item, index) => {
          return (
            <AlphaIndex
              key={item}
              alpha={item}
              onClick={handleAlphaClick}
            ></AlphaIndex>
          );
        })}
      </div>
    </div>
  );
});
