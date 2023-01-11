import React, { memo, useState } from "react";
import { candidatesType } from "../../constant/index";
import "./Candidate.scss";
import Seat from "./Seat";
interface candidateProps {
  candidates: candidatesType[];
}

const Candidate: React.FC<candidateProps> = memo((props) => {
  const { candidates } = props;
  return (
    <div className="candidate">
      <ul>
        {candidates.map((ticket, idx) => {
          return <Seat {...ticket} key={idx}></Seat>;
        })}
      </ul>
    </div>
  );
});

export default Candidate;
