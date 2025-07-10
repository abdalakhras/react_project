import React from "react";
import { useState,useContext, useRef} from "react";
import '../projStyle/progressBar.css'
import Button from "@mui/material/Button";
import ChartContext from "./chartContext";

export default function Progress(){
    
 const {checkedValue} = useContext(ChartContext)
 console.log(checkedValue)


    return(
        <div>
            <div className="prog-container">
                <div id="bar" className="prog-green" style={{ width: `${checkedValue}%` }}>{checkedValue}%</div>
            </div>
            <Button>Task Progress</Button>
        </div>
    )
}