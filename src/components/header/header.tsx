import React from "react";
import "./header.scss";

export interface headerProps {
  //标题
  title: string;
  //点击返回按钮事件
  onBack?: () => void;
}

export const Header: React.FC<headerProps> = (props) => {
  const { title, onBack } = props;

  const handleClick = () => {
    if (onBack) {
      onBack();
    }
  };
  return (
    <div className="header">
      <div className="header-back" onClick={handleClick}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
};
