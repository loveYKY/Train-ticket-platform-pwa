import React, { memo } from "react";
import { useNavigate } from "react-router";

interface ListItemProps {
  dTime: string;
  aTime: string;
  dStation: string;
  aStation: string;
  trainNumber: string;
  date: string;
  time: string;
  priceMsg: string;
  dayAfter: string;
  [key: string]: any;
}

export const ListItem: React.FC<ListItemProps> = memo((props) => {
  const {
    dTime,
    aTime,
    dStation,
    aStation,
    trainNumber,
    date,
    time,
    priceMsg,
    dayAfter,
  } = props;

  const navigator = useNavigate();

  const jumpToTicketPage = () => {
    navigator("/tickets", {
      state: {
        aStation: aStation,
        dStation: dStation,
        trainNumber: trainNumber,
        date: date,
      },
    });
  };

  return (
    <li className="list-item" onClick={jumpToTicketPage}>
      <span className="item-time">
        <em>{dTime}</em>
        <br />
        <em className="em-light">
          {aTime} <i className="time-after">{dayAfter}</i>
        </em>
      </span>
      <span className="item-stations">
        <em>
          <i className="train-station train-start">始</i>
          {dStation}
        </em>
        <br />
        <em className="em-light">
          <i className="train-station train-end">终</i>
          {aStation}
        </em>
      </span>
      <span className="item-train">
        <em>{trainNumber}</em>
        <br />
        <em className="em-light">{time}</em>
      </span>
      <span className="item-ticket">
        <em>{priceMsg}</em>
        <br />
        <em className="em-light-orange">可抢票</em>
      </span>
    </li>
  );
});
