import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './crads';

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

export default function BasicGrid() {
  return (
    <div className='BasicGrid-Margin'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} id='Grid-spacing'>
        <Grid size={2}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={2}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={2}>
          <Item><MediaCard/></Item>
        </Grid>
        <Grid size={2}>
          <Item><MediaCard/></Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
