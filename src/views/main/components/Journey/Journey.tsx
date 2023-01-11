import React, { memo } from "react";
import "./Journey.scss";
import switchImg from "../../../../static/img/svg/switch.svg";

export interface JourneyProps {
  from: string;
  to: string;
  exchangeFromTo: () => void;
  showCitySelector: (visible: boolean, currentSelectingLeftCity: boolean) => void;
}

export const Journey: React.FC<JourneyProps> = memo((props) => {
  const { from, to, exchangeFromTo, showCitySelector } = props;

  return (
    <div className="journey">
      <div
        className="journey-station"
        onClick={() => showCitySelector(true, true)}
      >
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div
        className="journey-station"
        onClick={() => showCitySelector(true, false)}
      >
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="journey-input journey-to"
        />
      </div>
    </div>
  );
});
