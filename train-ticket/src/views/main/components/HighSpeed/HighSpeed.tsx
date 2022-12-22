import React from "react";
import "./HighSpeed.scss";
import classNames from "classnames";

export interface HighSpeedProps {
  highSpeed: boolean;
  toggle: (status: boolean) => void;
}

export const HighSpeed: React.FC<HighSpeedProps> = (props) => {
  const { highSpeed, toggle } = props;

  const handleClick = () => {
    toggle(!highSpeed);
  };
  return (
    <div className="high-speed">
      <div className="high-speed-label">只看高铁/动车</div>
      <div className="high-speed-switch" onClick={handleClick}>
        <div
          className={classNames("high-speed-track", {
            checked: highSpeed,
          })}
        >
          <span
            className={classNames("high-speed-handle", {
              checked: highSpeed,
            })}
          ></span>
        </div>
      </div>
    </div>
  );
};
