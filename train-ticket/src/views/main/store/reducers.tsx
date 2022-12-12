export interface MainStateInterFace {
  from: string;
  to: string;
  isCitySelectorVisible: boolean;
  currentSelectingLeftCity: boolean;
  cityData: any;
  isLoadingCityData: boolean;
  isDateSelectorVisible: boolean;
  departDate: number;
  highSpeed: boolean;
}

export interface actionInterface {
  type:
    | "ACTION_SET_FROM"
    | "ACTION_SET_TO"
    | "ACTION_SET_IS_CITY_SELECTOR_VISIBLE"
    | "ACTION_SET_CURRENT_SELECTING_LEFT_CITY"
    | "ACTION_SET_CITY_DATA"
    | "ACTION_SET_IS_LOADING_CITY_DATA"
    | "ACTION_SET_IS_DATE_SELECTOR_VISIBLE"
    | "ACTION_SET_HIGH_SPEED"
    | "ACTION_SET_DEPART_DATE";
  playload: any;
}

export const mainReducers = (state: MainStateInterFace, action: actionInterface): any => {};
