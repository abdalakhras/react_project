import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import Button from '@mui/material/Button';

export default function TimeClockValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T00:00'));

  const[clockvalue,setCklockValue]=React.useState(dayjs('2022-04-17T00:00'))
  const handleClockValue=()=>{
    setCklockValue(value)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimeClock', 'TimeClock']}>
        
        <DemoItem label="Controlled clock">
          <TimeClock value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
        <p> {clockvalue.format('HH:mm')}</p>
        <Button color='success' onClick={handleClockValue}>Start</Button>
      </DemoContainer>
    </LocalizationProvider>
  );
}
