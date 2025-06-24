import React, { useContext, useState } from "react";
import '../projStyle/Tasks.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateField } from '@mui/x-date-pickers/DateField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChartContext from "./chartContext";
import TaskDateContext from "./taskDateContext";

export default function Tasks() {
  const { checkedValue, setCheckedValue } = useContext(ChartContext);
  const { taskDates, setTaskDates, setTaskId, transTask, setTransTask } = useContext(TaskDateContext);
  const [newTask, setNewTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState([{ id: -1, taskname: 'First Task' }]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newId = listOfTasks.length;
    const task = { id: newId, taskname: newTask };
    setListOfTasks([...listOfTasks, task]);
  };

  return (
    <div className="tasks-body">
      <h1>Tasks</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Add a Task" onChange={(e) => setNewTask(e.target.value)} />
        <Button type="submit" color="success">ADD</Button>
      </form>

      {listOfTasks.map((itm) => (
        <div key={itm.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox onChange={(e) => {
            if (e.target.checked) setCheckedValue(checkedValue + 10);
            else setCheckedValue(checkedValue - 10);
          }} />
          <p>{itm.taskname}</p>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField']}>
              <DateField
                label="Date"
                value={taskDates[itm.id]}
                onChange={(newValue) => {
                  setTaskDates({ ...taskDates, [itm.id]: newValue });
                  setTaskId(itm.id);
                  setTransTask([...transTask, { transTaskId: itm.id, transTaskName: itm.taskname }]);
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <Button color="error" onClick={() => {
            const updatedTasks = listOfTasks.filter(t => t.id !== itm.id);
            setListOfTasks(updatedTasks);
          }}>
            <DeleteForeverIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}
