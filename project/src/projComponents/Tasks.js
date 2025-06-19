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

   


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Tasks (){

    
    const{checkedValue,setCheckedValue}=useContext(ChartContext)   

    const[newTask,setNewTask]=useState('')
    const [iD,setID]=useState(-1)
    const taskObject= {id:iD, taskname:newTask, }

   
 
   

    
    
    const[listOfTasks,setListOfTasks] =useState([
        {id:0,taskname:'firstTask'},
        {id:1,taskname:'secondTask'},
        // {id:2,taskname:'thirdTask'},
    ])


    const[taskDates,setTaskDates]=useState({}) // here we just set the taskDate as an object

    // this is for the date field , we are creating an object for taskDates, and using the {id : } as a key
//     const [taskDates, setTaskDates] = useState(
//   listOfTasks.reduce((acc, task) => {
//     acc[task.id] = dayjs('2022-04-17');
//     return acc;
//   }, {})
// ); 
// this is for the date field
   

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

               <Checkbox {...label} onChange={(e)=>{
                console.log(e.target.checked)
                if(e.target.checked){
                    console.log(checkedValue)
                    setCheckedValue(checkedValue + 10)
                    
                }else{
                     console.log(checkedValue)   
                }
                }}/> 
                <p style={{ margin: 0 }}>{itm.taskname}</p>
                <p style={{margin:"5px 10px"}}><span style={{color:'blue',}}>{'date'}</span></p>
                {/* this is the date part */}
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField', 'DateField']}>
        <DateField
          label="Controlled field"
          value={taskDates[itm.id]}
          onChange={(newValue) => setTaskDates({...taskDates,[itm.id]:newValue}) }
        />
      </DemoContainer>
      <Button onClick={()=>{
        console.log(taskDates)
        console.log(taskDates[itm.id].format('YYYY-MM-DD'))
        }}>set</Button>
    </LocalizationProvider>

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