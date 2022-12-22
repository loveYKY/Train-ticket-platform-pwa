export type ORDER_DEPART = 1;
export type ORDER_DURATION = 2;
export type ORDER_TYPE = ORDER_DEPART | ORDER_DURATION;

export interface arrStationType {
  name: string;
  value: string;
}
export interface depStationType {
  name: string;
  value: string;
}
export interface trainsType {
  name: string;
  value: string;
}
export interface ticketType {
  name: string;
  value: string;
}
export interface searchStateInterFace {
  from: string;
  to: string;
  departDate: number;
  highSpeed: boolean;
  orderType: ORDER_TYPE;
  onlyTickets: boolean;
  checkedTicketTypes: Record<string, any>;
  checkedTrainTypes: Record<string, any>;
  checkedDepartStations: Record<string, any>;
  checkedArriveStations: Record<string, any>;
  departTimeStart: number;
  departTimeEnd: number;
  arriveTimeStart: number;
  arriveTimeEnd: number;
}

export type keyType =
  | "ticketTypes"
  | "trainTypes"
  | "departStations"
  | "arriveStations";

export type checkMapType =
  | "checkedTicketTypes"
  | "checkedTrainTypes"
  | "checkedDepartStations"
  | "checkedArriveStations";

export interface filterState {
  trainList: any[];
  ticketTypes: ticketType[];
  trainTypes: trainsType[];
  departStations: depStationType[];
  arriveStations: arrStationType[];
  isFiltersVisible: boolean;
}

export const keyNameMap = {
  ticketTypes: "坐席类型",
  trainTypes: "车次类型",
  departStations: "出发车站",
  arriveStations: "到达车站",
};

export const checkKeyMap = {
  ticketTypes: "checkedTicketTypes",
  trainTypes: "checkedTrainTypes",
  departStations: "checkedDepartStations",
  arriveStations: "checkedArriveStations",
};
