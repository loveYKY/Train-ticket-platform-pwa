import React, { memo, useEffect, useMemo, useRef } from "react";
import leftPad from "left-pad";
import useWinSize from "@/hooks/useWinSize";
import "./Slider.scss";
import { throttle } from "lodash";
interface SliderProps {
  title: string;
  timeStart: number;
  timeEnd: number;
  onStartTimeChange: (time: number) => void;
  onEndTimeChange: (time: number) => void;
}

export const Slider: React.FC<SliderProps> = memo((props) => {
  const { title, timeStart, timeEnd, onStartTimeChange, onEndTimeChange } =
    props;


  let windowSize = useWinSize();
  let sliderStart = (windowSize.width - windowSize.width * 0.6) / 2;
  let sliderEnd = windowSize.width * 0.6 + sliderStart;
  let lastStartIndex = 0;
  let lastEndIndex = 0;

  const startPercent = useMemo(() => {
    if ((timeStart / 24) * 100 > 100) {
      return 100;
    }

    if ((timeStart / 24) * 100 < 0) {
      return 0;
    }

    return (timeStart / 24) * 100;
  }, [timeStart]);

  const endPercent = useMemo(() => {
    if ((timeEnd / 24) * 100 > 100) {
      return 100;
    }

    if ((timeEnd / 24) * 100 < 0) {
      return 0;
    }

    return (timeEnd / 24) * 100;
  }, [timeEnd]);

  const startHours = useMemo(() => {
    return Math.round((startPercent * 24) / 100);
  }, [startPercent]);

  const endHours = useMemo(() => {
    return Math.round((endPercent * 24) / 100);
  }, [endPercent]);

  const startText = useMemo(() => {
    return leftPad(startHours, 2, "0") + ":00";
  }, [startHours]);

  const endText = useMemo(() => {
    return leftPad(endHours, 2, "0") + ":00";
  }, [endHours]);

  const onStartTouchBegin = (e: React.TouchEvent) => {
    lastStartIndex = e.targetTouches[0].pageX;
  };

  const onEndTouchBegin = (e: React.TouchEvent) => {
    lastEndIndex = e.targetTouches[0].pageX;
  };

  const onStartTouchMove = (e: React.TouchEvent) => {
    let touch = e.targetTouches[0];
    //如果起始滑块位置大于终止滑块、超出滑块长度范围、滑动距离小于一个单位，则函数终止
    let distance = touch.pageX - lastStartIndex;
    if (Math.abs(distance) < (windowSize.width * 0.6) / 24) return;
    if (
      touch.pageX >= sliderEnd ||
      touch.pageX >=
        sliderStart + (windowSize.width * 0.6 * endPercent) / 100 ||
      touch.pageX < sliderStart
    ) {
      return;
    } else {
      lastStartIndex = touch.pageX;
      let temp = (touch.pageX - sliderStart) / (windowSize.width * 0.6);
      let newStart = Math.round(temp * 24);
      onStartTimeChange(newStart);
    }
  };

  const onEndTouchMove = (e: React.TouchEvent) => {
    let touch = e.targetTouches[0];
    //如果终止滑块位置小于起始滑块、超出滑块长度范围、滑动距离小于一个单位，则函数终止
    let distance = touch.pageX - lastEndIndex;
    if (Math.abs(distance) < (windowSize.width * 0.6) / 24) return;

    if (
      touch.pageX >= sliderEnd ||
      touch.pageX <=
        sliderStart + (windowSize.width * 0.6 * startPercent) / 100 ||
      touch.pageX < sliderStart
    ) {
      return;
    } else {
      lastEndIndex = touch.pageX;
      let temp = (touch.pageX - sliderStart) / (windowSize.width * 0.6);
      let newEnd = Math.round(temp * 24);
      onEndTimeChange(newEnd);
    }
  };

  return (
    <div className="option">
      <h3>{title}</h3>
      <div className="range-slider">
        <div className="slider">
          <div
            className="slider-range"
            style={{
              left: startPercent + "%",
              width: endPercent - startPercent + "%",
            }}
          ></div>
          <i
            onTouchStart={(e: React.TouchEvent) => onStartTouchBegin(e)}
            onTouchMove={(e: React.TouchEvent) => onStartTouchMove(e)}
            className="slider-handle"
            style={{
              left: startPercent + "%",
            }}
          >
            <span>{startText}</span>
          </i>
          <i
            onTouchStart={(e: React.TouchEvent) => onEndTouchBegin(e)}
            onTouchMove={(e: React.TouchEvent) => onEndTouchMove(e)}
            className="slider-handle"
            style={{
              left: endPercent + "%",
            }}
          >
            <span>{endText}</span>
          </i>
        </div>
      </div>
    </div>
  );
});
