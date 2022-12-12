import React from "react";
import "./header.scss";
import { useStore } from "../../views/main/store/useStore";

export interface headerProps {
  //路由跳转的目的地
  url?: string;
  //标题
  title?: string;
}

export const Header: React.FC<headerProps> = (props) => {
  const { url, title } = props;

  const handleClick = () => {

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
