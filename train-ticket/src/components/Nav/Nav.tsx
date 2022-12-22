import React, { memo, useMemo } from "react";
import classNames from "classnames";
import moment from "moment";
import "./Nav.scss";
import { timeMap } from "@/constant/index";
interface NavProps {
  date: number;
  prev: () => void;
  next: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export const Nav: React.FC<NavProps> = memo((props) => {
  const { date, prev, next, isPrevDisabled, isNextDisabled } = props;

  const currentString = useMemo(() => {
    const d = moment(date);
    return (
      d.format("MM") +
      "月" +
      d.format("DD") +
      "日" +
      " " +
      "周" +
      timeMap[d.day()]
    );
  }, [date]);

  return (
    <div className="nav">
      <span
        onClick={prev}
        className={classNames("nav-prev", {
          "nav-disabled": isPrevDisabled,
        })}
      >
        前一天
      </span>
      <span className="nav-current">{currentString}</span>
      <span
        onClick={next}
        className={classNames("nav-next", {
          "nav-disabled": isNextDisabled,
        })}
      >
        后一天
      </span>
    </div>
  );
});
Nav.defaultProps = {
  isPrevDisabled: true,
  isNextDisabled: true,
};
