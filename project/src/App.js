import './App.css';
import ResponsiveAppBar from './projComponents/navigation';
import Tasks from './projComponents/Tasks';
import ResponsiveDatePickers from './projComponents/calender';
import Progress from './projComponents/progressBar';
import TimeClockValue from './projComponents/Time';
import ChartContext from './projComponents/chartContext';
import TaskDateContext from './projComponents/taskDateContext';

import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [checkedValue, setCheckedValue] = useState(10);
  const [taskDates, setTaskDates] = useState({});
  const [taskId, setTaskId] = useState(-10);
  const [transTask, setTransTask] = useState([]);

  return (
    <div className="App">
      <ChartContext.Provider value={{ checkedValue, setCheckedValue }}>
        <TaskDateContext.Provider value={{ taskDates, setTaskDates, taskId, setTaskId, transTask, setTransTask }}>
          <ResponsiveAppBar />
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Item><Tasks /></Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item><ResponsiveDatePickers /></Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item><Progress /></Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Item><TimeClockValue /></Item>
              </Grid>
            </Grid>
          </Box>
        </TaskDateContext.Provider>
      </ChartContext.Provider>
    </div>
  );
}

export default App;
