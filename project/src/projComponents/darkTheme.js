import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
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

export default function MyApp() {


const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  



  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'end',
        justifyContent: 'center',
        gap:"40px",
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <Button color='secondary' onClick={handleOpen}>How to use Tasks</Button>

      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
{/* this is for the explanation on how to use Tasks */}

  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color='secondary'>
            How to use Tasks
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} color='info'> 
            1.type a task name in input field in "Tasks"section <br/>
            2.select a date on when you want to complete the task <br/>
            3.on the "calender" section ,you can see which tasks you have on the date you have already selcted on "Tasks" section<br/>
            4.you can select a timer for one specified task <br/>
            5.you can check/mark the task as completed on "checkbox" , and see your progress in the "proggress bar" section
          </Typography>
        </Box>
      </Modal>

    </Box>
  );
}

// const theme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
// });

// export default function ToggleColorMode() {
//   return (
//     <ThemeProvider theme={theme}>
//       <MyApp />
//     </ThemeProvider>
//   );
// }
