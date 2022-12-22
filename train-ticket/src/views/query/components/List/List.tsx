import React, { memo } from "react";
import "./List.scss";
import { ListItem } from "./ListItem";
interface ListProps {
  trainList: any[];
}

export const List: React.FC<ListProps> = memo((props) => {
  const { trainList } = props;
  return (
    <ul className="list">
      {trainList.map((item) => (
        <ListItem {...item} key={item.trainNumber} />
      ))}
    </ul>
  );
});
