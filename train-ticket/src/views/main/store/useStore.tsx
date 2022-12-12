import { useReducer, useState } from "react";
import { mainReducers } from "./reducers";

export const useStore = () => {
  const [mainState, disPatch] = useReducer(mainReducers, {
    from: "北京",
    to: "上海",
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false,
  });


  return {
    mainState,
    disPatch
  }
};
