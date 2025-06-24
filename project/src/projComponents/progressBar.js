import React, { useContext, useRef } from "react";
import '../projStyle/progressBar.css';
import Button from "@mui/material/Button";
import ChartContext from "./chartContext";

export default function Progress() {
  const { checkedValue } = useContext(ChartContext);
  const intervalRef = useRef(null);

  const move = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (checkedValue >= 100) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 100);
  };

  return (
    <div>
      <div className="prog-container">
        <div className="prog-green" style={{ width: `${checkedValue}%` }}>{checkedValue}%</div>
      </div>
      <Button onClick={move}>progress</Button>
    </div>
  );
}
