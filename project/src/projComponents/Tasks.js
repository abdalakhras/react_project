import React, { useContext, useState } from "react";
import '../projStyle/Tasks.css'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChartContext from "./chartContext";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import TaskDateContext from "./taskDateContext";

   


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Tasks (){

    
    const{checkedValue,setCheckedValue}=useContext(ChartContext)   

    const[newTask,setNewTask]=useState('')
    const [iD,setID]=useState(0)
    const taskObject= {id:iD, taskname:newTask, }

   
 const [checkedTasks,setCheckedTasks]=useState({})
   console.log(checkedTasks)

    
    
    const[listOfTasks,setListOfTasks] =useState([
        {id:-1,taskname:'Firts Task'},
        // {id:0,taskname:'secondTask'},
        // {id:2,taskname:'thirdTask'},
    ])


    const{taskDates,setTaskDates,taskId,setTaskId,transTask,setTransTask}=useContext(TaskDateContext) // here we just set the taskDate as an object
    // this is for the date field , we are creating an object for taskDates, and using the {id : } as a key

    





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
                console.log(listOfTasks.length)
               console.log(iD)
               console.log('listOfTasks:', listOfTasks)
               
               const checkedCountx = Object.values(checkedTasks).filter(Boolean).length;
               setCheckedValue(100/listOfTasks.length * checkedCountx )
               
            }}> 
            <input type="text" placeholder="Add a Task" onChange={(e)=>{setNewTask(e.target.value)}}></input>
            <Button color="success" type="submit">ADD</Button>
            </form>
            <div>
             {listOfTasks.map((itm)=>(
                <div key={itm.id}   style={{ display: 'flex', alignItems: 'center', gap: '8px', width:'100%' }}>

               <Checkbox {...label} onChange={(e)=>{
                console.log(e.target.checked)
                if(e.target.checked){
                    console.log(checkedValue)
                    setCheckedValue(checkedValue + 100/listOfTasks.length)
                    
                }else{
                      setCheckedValue(checkedValue - 100/listOfTasks.length)  
                }
                setCheckedTasks({...checkedTasks,[itm.id]:e.target.checked})
                }}/> 
                <p style={{ margin: 0 }}>{itm.taskname}</p>
                <p style={{margin:"5px 10px"}}><span style={{color:'blue',}}>{'date'}</span></p>
                {/* this is the date part */}
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField', 'DateField']}>
        <DateField
          label="Pick A Date"
          value={taskDates[itm.id]}
          onChange={(newValue) => {
            setTaskDates({...taskDates,[itm.id]:newValue})
            setTaskId(itm.id)
            setTransTask([...transTask,{transTaskId:itm.id,transTaskName:itm.taskname}])
            console.log('taskId is:', taskId )
           } }
        />
      </DemoContainer>
      <Button onClick={()=>{
        console.log(taskDates)
        console.log(taskDates[itm.id].format('YYYY-MM-DD'))
        }}>set</Button>
    </LocalizationProvider>

                <Button color="error" onClick={()=>{
                    const newListOfTasks = listOfTasks.filter((t)=>{
                        setCheckedTasks({...checkedTasks,[t.id]: false})
                        console.log(checkedTasks)
                       return  t.id != itm.id
                    })
                    setListOfTasks(newListOfTasks)
                     const checkedCount = Object.values(checkedTasks).filter(Boolean).length;
                    console.log(checkedCount)
                     setCheckedValue(100/newListOfTasks.length * checkedCount ) 
                }}><DeleteForeverIcon/></Button>

                
                    
                </div>
             ))}

             

            </div>



  



        </div>
        
    )
}