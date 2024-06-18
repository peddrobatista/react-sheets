import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{height: 100}}>
          <Typography variant="h6" component="a" 
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '29px',
            fontWeight: '800',
          }}>
            Estatísticas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}