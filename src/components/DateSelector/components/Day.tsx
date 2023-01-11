import { FC } from "react";
import { timeTranslate } from "../../../hooks/timeTranslate";
import classNames from "classnames";

interface DayProps {
  day: number;
  onSelect: (day: number) => void;
}

export const Day: FC<DayProps> = (props) => {
  const { day, onSelect } = props;

  if (!day) {
    return <td className="null"></td>;
  }

  const classes = [];

  const now = timeTranslate();

  if (day < now) {
    classes.push("disabled");
  }

  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push("weekend");
  }

  const dateString = now === day ? "今天" : new Date(day).getDate();

  return (
    <td className={classNames(classes)} onClick={() => onSelect(day)}>
      {dateString}
    </td>
  );
};
