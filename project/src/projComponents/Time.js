import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import { useEffect } from 'react';


export default function TimeClockValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T00:00'));

  const[clockvalue,setCklockValue]=React.useState(dayjs('2022-04-17T00:00'))
  const handleClockValue=()=>{
    setCklockValue(value)
  }
  const handlclockReset = ()=>{
    setCklockValue((dayjs('2022-04-17T00:00')))
    setValue(dayjs('2022-04-17T00:00'))
    setAlarmTriggered(false)
     console.log(value)
  }
 
  const[alarmTriggered,setAlarmTriggered]=React.useState(false)

useEffect(()=>{
  console.log('counter has started')

let timer = setInterval(()=>{

const now = dayjs()
const formatedTime = now.format('HH:mm')
//  console.log(now)
// console.log(formatedTime)

if(formatedTime === clockvalue.format('HH:mm') && !alarmTriggered){
  alert('alarm')
  setAlarmTriggered(true)
   handlclockReset()
}

},1000)
 

return ()=> {
  clearInterval(timer)
  console.log('counter has stooped')
}


},[clockvalue,alarmTriggered]) // the dependency array is to re-run the useEfffect , which first cleans-up the previous effect , using clearInterval






  return (
    <div style={{width:'100%', }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={[ 'TimePicker']}>
        
        <TimePicker
          label="Set Alarm"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        
        <div style={{display:'flex', marginLeft:'30px'}}>
          <p style={{fontSize:'20px',marginRight:'10px'}}> {clockvalue.format('HH:mm')}</p>
          <Button color='success' onClick={handleClockValue}>Start Alarm</Button>
        <Button color='success' onClick={()=>{
          handlclockReset()
          
          }}>Reset</Button>
        </div>
        
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
