import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs());
  const [newTaskName, setNewTaskName] = useState("");
  const { taskDates, transTask } = useContext(TaskDateContext);

  const handleCheckTasks = () => {
    transTask.forEach((task) => {
      const date = taskDates[task.transTaskId];
      if (date && date.isSame(value, 'day')) {
        setNewTaskName(task.transTaskName);
        setOpen(true);
      }
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem label="Controlled calendar">
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
          <Button onClick={handleCheckTasks}>{value.format('YYYY-MM-DD')}</Button>
        </DemoItem>
      </DemoContainer>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">Task for the day</Typography>
          <Typography>{newTaskName}</Typography>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
}
