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
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import TaskDateContext from "./taskDateContext";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

   


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Tasks (){


     const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

    
    const{checkedValue,setCheckedValue}=useContext(ChartContext)   

    const[newTask,setNewTask]=useState('')
    const [iD,setID]=useState(0)
    const taskObject= {id:iD, taskname:newTask, }

    const [editTaskName,setEditTaskName]=useState('')
   
 const [checkedTasks,setCheckedTasks]=useState({})

    
    
    const[listOfTasks,setListOfTasks] =useState([
        {id:-1,taskname:'Firts Task',checkdvalue:checkedValue},
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
                console.log(iD)
               setListOfTasks([...listOfTasks,taskObject])
               setCheckedTasks({...checkedTasks,[listOfTasks.length]:false}) // works normally without it , but keep it in code better
               console.log(checkedTasks)
                console.log(listOfTasks.length + 1)
               console.log(Object.values(checkedTasks).filter(Boolean).length)
               console.log('listOfTasks:', listOfTasks)
               
               const checkedCountx = Object.values(checkedTasks).filter(Boolean).length;
               setCheckedValue(100/(listOfTasks.length + 1) * checkedCountx )
               
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

                     itm.checkdvalue =  100/listOfTasks.length
                }else{
                      setCheckedValue(checkedValue - 100/listOfTasks.length)  

                      itm.checkdvalue = 0
                }
                setCheckedTasks({...checkedTasks,[itm.id]:e.target.checked})

                //  itm.checkdvalue =  100/listOfTasks.length
                setTransTask([...transTask,{transTaskId:itm.id,transTaskName:itm.taskname,transValue:itm.checkdvalue}])
                console.log('itm.checkedValue',itm.checkdvalue)
                setTaskId(itm.id)
                }}/> 
                <Typography color="secondary.main" style={{ margin: 0 }}>{itm.taskname}</Typography>
                <p style={{margin:"5px 10px"}}><span style={{color:'blue',fontSize:"20Px"}}>{'=>'}</span></p>
                {/* this is the date part */}
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
       <DemoItem >
 <DatePicker  className="DateField-BKG"

          label="Pick A Date"
          value={taskDates[itm.id]}
          onChange={(newValue) => {
            setTaskDates({...taskDates,[itm.id]:newValue})
            setTaskId(itm.id)
            setTransTask([...transTask,{transTaskId:itm.id,transTaskName:itm.taskname}])
            console.log('taskId is:', taskId )
            console.log(taskDates)
           } }
           
         fullWidth={true}
         

      sx={{
        minWidth: '10px !important',
        
      }}
    
      
        />
     </DemoItem>
       
      </DemoContainer>
      <Button onClick={()=>{
        handleOpen()
        
         }}>edit TaskName</Button>
    </LocalizationProvider>

                <Button color="error" onClick={()=>{
                    const newListOfTasks = listOfTasks.filter((t)=>{
                        // setCheckedTasks({...checkedTasks,[t.id]: false}) this doesn't work , so we decided to delete the checked {true or false} from the object in line 127
                        console.log(checkedTasks)
                       return  t.id != itm.id
                    })
                    delete checkedTasks[`${itm.id}`] // this is to delete the checked {true or false} from the object
                    console.log(checkedTasks)
                    setCheckedTasks(checkedTasks) 
                
                    setListOfTasks(newListOfTasks)
                     const checkedCount = Object.values(checkedTasks).filter(Boolean).length;
                    console.log(checkedCount)
                     setCheckedValue(100/newListOfTasks.length * checkedCount ) 
                }}><DeleteForeverIcon/></Button>

                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleClose()
            const editedTaskName = listOfTasks.map((t)=>{
            if(t.id === itm.id){
                return {...t,taskname:editTaskName}
            }else{
                return t 
            }
        })
       
       setListOfTasks(editedTaskName) 
          }}>
         <input type="text" placeholder="edit taskName" onChange={(e)=>{setEditTaskName(e.target.value)}}></input>
         <Button type="submit">submit</Button>
        </form>
        </Box>
      </Modal>
                    
                </div>
             ))}

             


            </div>


  



        </div>
        
    )
}