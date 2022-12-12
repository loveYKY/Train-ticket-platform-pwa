import React, { memo } from "react";
import { CityItem } from "./CityItem";

import { citysType } from "./CityList";

interface CitySectionProps {
  title: string;
  cities: citysType[];
  onSelect: (data: string) => void;
}

export const CitySection: React.FC<CitySectionProps> = memo((props) => {
  const { title, cities, onSelect } = props;

  return (
    <ul className="city-ul">
      <li className="city-li" key={title} data-cate={title}>
        {title}
      </li>
      {cities.map((city) => {
        return (
          <CityItem
            key={city.name}
            name={city.name}
            onSelect={onSelect}
          ></CityItem>
        );
      })}
    </ul>
  );
});
