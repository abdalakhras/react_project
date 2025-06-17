import React, { useState } from "react";
import '../projStyle/Tasks.css'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Tasks (){

    

    const[newTask,setNewTask]=useState('')
    const [iD,setID]=useState(-1)
    const taskObject= {id:iD, taskname:newTask, }

    
    


    const[listOfTasks,setListOfTasks] =useState([
        {id:0,taskname:'firstTask'},
        {id:1,taskname:'secondTask'},
        {id:2,taskname:'thirdTask'},
    ])


   

    return(
        <div className="tasks-body">
            <header>
            <h1>Tasks</h1>
            </header>
            <br/>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setID(listOfTasks.length)
               setListOfTasks([...listOfTasks,taskObject])
               console.log(iD)

            }}> 
            <input type="text" placeholder="Add a Task" onChange={(e)=>{setNewTask(e.target.value)}}></input>
            <Button color="success" type="submit">ADD</Button>
            </form>
            <div>
             {listOfTasks.map((itm)=>(
                <div key={itm.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

               <Checkbox {...label} onClick={(e)=>{console.log(e.target.checked)}}/> 
                <p style={{ margin: 0 }}>{itm.taskname}</p>
                <p style={{margin:"5px 10px"}}><span style={{color:'blue',}}>{'date'}</span></p>
                <Button color="error" onClick={()=>{
                    const newListOfTasks = listOfTasks.filter((t)=>{
                       return t.id != itm.id
                    })
                    setListOfTasks(newListOfTasks)
                }}><DeleteForeverIcon/></Button>
                    
                </div>
             ))}
            </div>
        </div>
    )
}