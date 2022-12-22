export interface dataStateInterface {
  departDate: number;
  arriveDate: number;
  departTimeStr: string;
  arriveTimeStr: string;
  departStation: string;
  arriveStation: string;
  trainNumber: string;
  durationStr: string;
  tickets: candidatesType[];
  isScheduleVisible: boolean;
}
export interface channelsType {
  name: string;
  desc: string;
}
export interface candidatesType {
  channels: channelsType[];
  priceMsg: string;
  ticketsLeft: string;
  type: string;
}
