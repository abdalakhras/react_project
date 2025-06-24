import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import Button from '@mui/material/Button';

export default function TimeClockValue() {
  const [value, setValue] = React.useState(dayjs());
  const [clockValue, setClockValue] = React.useState(dayjs());

  const handleClockValue = () => {
    setClockValue(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimeClock']}>
        <DemoItem label="Controlled clock">
          <TimeClock value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
        <p>{clockValue.format('HH:mm')}</p>
        <Button color='success' onClick={handleClockValue}>Start</Button>
      </DemoContainer>
    </LocalizationProvider>
  );
}
