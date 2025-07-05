import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './crads';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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


export default function BasicGrid() {

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className='BasicGrid-Margin'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} id='Grid-spacing'>
        <Grid size={{ xs: 12, md: 8 }}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Item><MediaCard/></Item>
        </Grid>
        {/* <Grid><Item><img onClick={handleOpen} src='/pngwing 3.png'/></Item></Grid> */}
      </Grid>
    </Box>
    {/* this is a trial for modal to open insaide an image */}
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>
    
  );
}
