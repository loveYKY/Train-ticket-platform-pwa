import { FC } from "react";
import { Day } from "./Day";

interface WeekProps {
  days: number[];
  onSelect: (day: number) => void;
}

export const Week: FC<WeekProps> = (props) => {
  const { days, onSelect } = props;
  return (
    <tr className="date-table-days">
      {days.map((day, idx) => {
        return <Day key={idx} day={day} onSelect={onSelect} />;
      })}
    </tr>
  );
};
