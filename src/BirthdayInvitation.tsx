// src/BirthdayInvitation.tsx
import React from 'react';
// import Header from './Header';

// Material UI
import {Box, Typography} from '@mui/material';
import CountdownSection from './components/CountdownSection';
import DetailsSection from './components/DetailsSection';
import RockHeader from './components/RockHeader';
// import CountdownFlipAnimated from './components/CountdownFlipAnimated';

const BirthdayInvitation: React.FC = () => {
  // Tema custom
  const theme = {
    primary: '#6d28d9', // purple-700
    secondary: '#ec4899', // pink-500
    background: 'linear-gradient(to bottom,rgb(94, 94, 94), #000)',
    success: '#10b981', // green-500
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.background,
        color: 'white',
        pb: 4,
      }}
    >
      {/* Header con componente separato */}
      {/* <Header /> */}
      <RockHeader />
      {/* <div
        style={{
          background: '#111',
          minHeight: '50vh',
          margin: '0 auto',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CountdownFlipAnimated />
      </div> */}

      {/* Hero Section with Countdown */}
      <CountdownSection />

      {/* Main Content */}
      <DetailsSection />

      {/* Footer */}
      <Box
        component='footer'
        sx={{
          py: 3,
          textAlign: 'center',
          color: theme.secondary,
        }}
      >
        <Typography variant='body2'>© 2025 Rock Birthday Party | Ci vediamo il 31/12/2025!</Typography>
      </Box>
    </Box>
  );
};

export default BirthdayInvitation;
