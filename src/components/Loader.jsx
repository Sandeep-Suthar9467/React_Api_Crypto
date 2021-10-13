import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </div>

);

export default Loader;
