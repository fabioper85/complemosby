// src/MinimalBirthdayInvitation.tsx
import React from 'react';
import {Box, Typography, CssBaseline} from '@mui/material';
import {rockTheme} from '../../themes/minimal/rockTheme';
import RockHeader from '../minimal/RockHeader';
import DetailSection from '../minimal/DetailsSection';
import LocationSection from '../minimal/LocationSection';
import CountdownContainer from './m3-countdown/CountdownContainer';

const BirthdayInvitation: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{minHeight: '100vh'}}>
        {/* Header */}
        <RockHeader />

        {/* Hero with Countdown */}
        <CountdownContainer />

        {/* Details Section */}
        <DetailSection />

        {/* Location Section */}
        <LocationSection />

        {/* Footer */}
        <Box
          component='footer'
          sx={{
            py: 4,
            textAlign: 'center',
            bgcolor: rockTheme.primary,
            color: rockTheme.secondary,
            borderTop: `5px solid ${rockTheme.accent}`,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              opacity: 0.7,
              letterSpacing: 1,
            }}
          >
            © 2025 Rock Birthday Party | Ci vediamo il 31/12/2025!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BirthdayInvitation;
