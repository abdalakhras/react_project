import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './projComponents/navigation';
import MediaCard from './projComponents/crads';
import BasicGrid from './projComponents/grid';
import ResponsiveDatePickers from './projComponents/calender';
import BasicPie from './projComponents/chart';
import Tasks from './projComponents/Tasks';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TimeClockValue from './projComponents/Time';
import ChartContext from './projComponents/chartContext';
import { useState,useContext } from 'react';
import Progress from './projComponents/progressBar';
import TaskDateContext from './projComponents/taskDateContext';
import dayjs from 'dayjs';
import DateCalendarValue from './projComponents/calender';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {

const[checkedValue,setCheckedValue]=useState(0)  

const[taskDates,setTaskDates]=useState({})
const [taskId,setTaskId] = useState(-10)
const[transTask,setTransTask]=useState([])

  return (
     
    <div className="App">
      <ChartContext.Provider value={{checkedValue,setCheckedValue}}>
        <TaskDateContext.Provider value={{taskDates,setTaskDates,taskId,setTaskId,transTask,setTransTask}} >
       <ResponsiveAppBar/>
       <br/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 8, md:6 }}>
          <Item><Tasks/></Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md:6  }}>
          <Item><ResponsiveDatePickers /></Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 8,  md:6  }}>
          <Item><Progress/></Item>
        </Grid>
        <Grid size={{ xs: 12, sm: 8,  md:6  }}>
          <Item><TimeClockValue/></Item>
        </Grid>
      </Grid>
    </Box>
       </TaskDateContext.Provider>
      </ChartContext.Provider>
    </div>
  );
}

export default App;
