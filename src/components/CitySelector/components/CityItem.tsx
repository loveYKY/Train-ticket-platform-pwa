import React, { memo } from "react";

interface CityItemInterface {
  name: string;
  onSelect: (data: string) => void;
}

export const CityItem: React.FC<CityItemInterface> = memo((props) => {
  const { name, onSelect } = props;

  const handleClick = () => {
    onSelect(name);
  };
  return <li className="city-li" onClick={handleClick}>{name}</li>;
});
