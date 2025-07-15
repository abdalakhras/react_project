import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import TaskDateContext from './taskDateContext';


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


export default function DateCalendarValue() {
// this is for the popup modal
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // this is for the popup modal 2
const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);



// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today =  yyyy + '-' + mm + "-" + dd;
// console.log(today)

  // this value is for the calender
  const [value, setValue] = React.useState(dayjs());

 
   
  const {taskDates,taskId,transTask} = useContext(TaskDateContext) // this is for the date of the task

 const [newTaskName, setNewTaskName] = React.useState("");




console.log(value)

let currentDate = taskDates[taskId]

 transTask.map((it)=>{
console.log('transTask id :', it.transTaskId)
console.log('transTask task :', it.transTaskName)
const newDate = taskDates[it.transTaskId] 
console.log('taskDate: ',taskDates)
console.log('newDate of it.transTaskId : ',newDate)

if(newDate && newDate.isSame(value,'day')) { 
  console.log(true)
}else{
   console.log(false)
}

// if (newDate && newDate.isSame(value)) {
//   console.log("Dates match!");
//   console.log(it.transTaskName)
// }
})





 // check thier formated strings 

// if (currentDate && currentDate.isSame(value)) {
//   console.log("Dates match!");
// }


// if (taskDates.format() === value.format()) {      
//   console.log("hello");
//   console.log(taskDates.format('YYYY-MM-DD '))
//   console.log(value.format('YYYY-MM-DD'))
// }

  return (
    <div style={{width:"100%",height:"100%" ,border:'solid black 2px'}}> 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem label="Pick your Date to show Task">
          <DateCalendar
           value={value} onChange={(newValue) => {setValue(newValue)}}
           
           sx={{width:"100%",margin:"auto !important",}} 
           />
            
            <Button style={{cursor:'pointer'}} onClick={()=>{
              // console.log(value.format('YYYY-MM-DD'))
              transTask.map(t => {
                const newDate = taskDates[t.transTaskId]
                console.log(newDate)
                if (newDate && newDate.isSame(value,"day")){
                  console.log('Dates Match !')
                  setNewTaskName(t.transTaskName)
                   handleOpen()
                   
                }
                // else{
                // alert('no Tasks on specified Date')
                 
                // }

              });
            
            }} 
            >Show Task</Button>
           
        </DemoItem>
      </DemoContainer>

      {/* this is a popup modal */}
              <div>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {newTaskName}
          </Typography>
        </Box>
      </Modal>
      
    </div>

    {/* this is a popup modal 2 */}
              <div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal 2
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            No Tasks on this date
          </Typography>
        </Box>
      </Modal>
      
    </div>
    
                

    </LocalizationProvider>
    </div>
  );
}
