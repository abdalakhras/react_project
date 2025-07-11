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
import Stack from '@mui/material/Stack';
import TimeClockValue from './projComponents/Time';
import ChartContext from './projComponents/chartContext';
import { useState,useContext } from 'react';
import Progress from './projComponents/progressBar';
import TaskDateContext from './projComponents/taskDateContext';
import dayjs from 'dayjs';
import DateCalendarValue from './projComponents/calender';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyApp from './projComponents/darkTheme';

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  
  },
});


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
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <main>
      <ChartContext.Provider value={{checkedValue,setCheckedValue}}>
        <TaskDateContext.Provider value={{taskDates,setTaskDates,taskId,setTaskId,transTask,setTransTask}} >
       {/* <ResponsiveAppBar/> */}
      <MyApp/>
       <br/>
        <Box sx={{ flexGrow: 1, margin:'20px 20px',}}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, sm: 8, md:6 }}>
          <Stack spacing={4}>
          <Item><Tasks/></Item>     
          {/* this is to show ResponsiveDatePickers in xs and sm just below Task, but not in md */}
          <Box sx={{display:{xs:'block',md:'none'}}}>
            <Item><ResponsiveDatePickers/></Item>
            </Box>  
          <Item><Progress/></Item>
          <Item><TimeClockValue/></Item>
          </Stack>
         </Grid>
         {/* this is to show ResponsiveDatePickers only in md on the right side , not in xs and sm */}
        <Grid size={{ xs: 12, sm: 8, md:4  }}
              sx={{display:{xs:"none",md:"block"}}}
        >
          <Item sx={{ height: '100%', boxSizing: 'border-box' }}><ResponsiveDatePickers /></Item>
        </Grid>
      </Grid>
    </Box>
       </TaskDateContext.Provider>
      </ChartContext.Provider>
      </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
