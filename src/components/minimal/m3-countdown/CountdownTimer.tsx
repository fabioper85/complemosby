// src/components/m3/CountdownTimer.tsx
import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {rockTheme} from '../../../themes/minimal/rockTheme';
import {CountdownState} from '../../../const/types';

/**
 * The countdown timer component.
 * This handles the countdown logic and displays the days, hours, minutes, and seconds.
 */
const CountdownTimer: React.FC = () => {
  // Reusing the existing countdown state and logic
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = (): void => {
      const eventDate = new Date(2025, 11, 31, 19, 0, 0);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({days, hours, minutes, seconds});
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Enhancing the existing CountdownBox with Material You styling
  const CountdownBox: React.FC<{value: number; label: string}> = ({value, label}) => (
    <Box
      sx={{
        width: {xs: '70px', sm: '100px', md: '120px'},
        height: {xs: '70px', sm: '100px', md: '8rem'},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: rockTheme.accent,
        color: rockTheme.secondary,
        // borderRadius: '16px', // M3 uses rounded corners
        boxShadow: `0 0 10px 2px ${rockTheme.accent}`, // Light shadow for elevation
        position: 'relative',
        transition: 'transform 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          // transform: 'translateY(-4px)', // Subtle lift effect on hover
        },
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontWeight: 'bold',
          lineHeight: 1,
          fontSize: {xs: '2rem', sm: '2.5rem', md: '3.15rem'},
        }}
      >
        {value}
      </Typography>
      <Typography
        variant='caption'
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontWeight: 500,
          mt: 1,
          fontSize: '0.75rem',
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  // Reusing the existing layout for countdown boxes
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: {xs: 2, md: 3},
        justifyContent: {xs: 'center', md: 'flex-end'},
      }}
    >
      <CountdownBox value={countdown.days} label='Giorni' />
      <CountdownBox value={countdown.hours} label='Ore' />
      <CountdownBox value={countdown.minutes} label='Minuti' />
      <CountdownBox value={countdown.seconds} label='Secondi' />
    </Box>
  );
};

export default CountdownTimer;
