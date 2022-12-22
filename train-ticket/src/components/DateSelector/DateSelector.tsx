import { FC } from "react";
import "./DateSelector.scss";
import { Header } from "../header/header";
import { getMonthStartTime } from "../../hooks/timeTranslate";
import { Month } from "./components/Month";
interface DateSelectorProps {
  onSelect: (day: number) => void;
  closeDateSelector: () => void;
}

export const DateSelector: FC<DateSelectorProps> = (props) => {
  const { onSelect, closeDateSelector } = props;
  let monthSequence: number[] = [];
  const initTime = () => {
    const nowMonthTime = getMonthStartTime();
    monthSequence = [nowMonthTime.getTime()];
    nowMonthTime.setMonth(nowMonthTime.getMonth() + 1);
    monthSequence.push(nowMonthTime.getTime());
    nowMonthTime.setMonth(nowMonthTime.getMonth() + 1);
    monthSequence.push(nowMonthTime.getTime());
  };
  initTime();

  const onBack = () => {
    closeDateSelector();
  };
  return (
    <div className="date-selector">
      <Header title="日期选择" onBack={onBack}></Header>
      <div className="date-selector-tables">
        {monthSequence.map((month) => {
          return (
            <Month
              key={month}
              startingTimeInMonth={month}
              onSelect={onSelect}
            ></Month>
          );
        })}
      </div>
    </div>
  );
};
