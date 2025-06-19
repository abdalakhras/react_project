import React from "react";
import { useState,useContext, useRef} from "react";
import '../projStyle/progressBar.css'
import Button from "@mui/material/Button";
import ChartContext from "./chartContext";

export default function Progress(){
    
 const {checkedValue} = useContext(ChartContext)
 console.log(checkedValue)

const [progress, setProgress] = useState(20);
  const intervalRef = useRef(null);

  const move = () => {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

    return(
        <div>
            <div className="prog-container">
                <div id="bar" className="prog-green" style={{ width: `${checkedValue}%` }}>{checkedValue}%</div>
            </div>
            <Button>progress</Button>
        </div>
    )
}