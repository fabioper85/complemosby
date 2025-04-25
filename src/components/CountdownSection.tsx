// src/components/CountdownSection.tsx
import React, {useState, useEffect} from 'react';
import {Box, Container, Typography, Divider, Paper} from '@mui/material';
import {rockTheme} from '../themes/rockTheme';
import {CountdownState} from '../types';

const CountdownSection: React.FC = () => {
  // Countdown
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = (): void => {
      const eventDate = new Date('December 31, 2025 19:00:00');
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

  return (
    <Container maxWidth='lg' sx={{py: 5, mb: 4, position: 'relative'}}>
      {/* Striscia rossa diagonale in stile rock */}
      {/* <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '60px',
          bgcolor: rockTheme.secondary,
          left: 0,
          top: '35%',
          transform: 'skewY(-2deg)',
          zIndex: 0,
        }}
      /> */}

      <Box className='rock-title-font-3' sx={{textAlign: 'center', position: 'relative', zIndex: 1}}>
        <Box component='span' sx={{color: 'white', fontSize: '10rem'}}>
          Rock
        </Box>
        <Box component='span' sx={{color: rockTheme.primary, fontSize: '10rem'}}>
          Birthday
        </Box>

        <Typography variant='h4' sx={{mb: 6}}>
          31 / 12 / 2025
        </Typography>

        {/* <Divider
          sx={{
            width: '75%',
            mx: 'auto',
            borderColor: rockTheme.primary,
            borderWidth: 3,
            mb: 4,
          }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: rockTheme.primary,
            mb: 4,
          }}
        >
          Mancano solo:
        </Typography> */}

        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center'}}>
          <Box sx={{width: {xs: 'calc(50% - 12px)', md: 'calc(25% - 18px)'}}}>
            <Paper
              sx={{
                p: 3,
                bgcolor: rockTheme.lightDark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid ${rockTheme.primary}`,
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 'bold',
                  color: rockTheme.primary,
                  mb: 1,
                }}
              >
                {countdown.days}
              </Typography>
              <Typography variant='body2' sx={{textTransform: 'uppercase', color: 'white'}}>
                Giorni
              </Typography>
            </Paper>
          </Box>

          <Box sx={{width: {xs: 'calc(50% - 12px)', md: 'calc(25% - 18px)'}}}>
            <Paper
              sx={{
                p: 3,
                bgcolor: rockTheme.lightDark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid ${rockTheme.primary}`,
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 'bold',
                  color: rockTheme.primary,
                  mb: 1,
                }}
              >
                {countdown.hours}
              </Typography>
              <Typography variant='body2' sx={{textTransform: 'uppercase', color: 'white'}}>
                Ore
              </Typography>
            </Paper>
          </Box>

          <Box sx={{width: {xs: 'calc(50% - 12px)', md: 'calc(25% - 18px)'}}}>
            <Paper
              sx={{
                p: 3,
                bgcolor: rockTheme.lightDark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid ${rockTheme.primary}`,
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 'bold',
                  color: rockTheme.primary,
                  mb: 1,
                }}
              >
                {countdown.minutes}
              </Typography>
              <Typography variant='body2' sx={{textTransform: 'uppercase', color: 'white'}}>
                Minuti
              </Typography>
            </Paper>
          </Box>

          <Box sx={{width: {xs: 'calc(50% - 12px)', md: 'calc(25% - 18px)'}}}>
            <Paper
              sx={{
                p: 3,
                bgcolor: rockTheme.lightDark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid ${rockTheme.primary}`,
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 'bold',
                  color: rockTheme.primary,
                  mb: 1,
                }}
              >
                {countdown.seconds}
              </Typography>
              <Typography variant='body2' sx={{textTransform: 'uppercase', color: 'white'}}>
                Secondi
              </Typography>
            </Paper>
          </Box>
        </Box>

        <Typography variant='h6' sx={{mt: 4}}>
          Preparati a un epico Capodanno in stile Glam Rock!
        </Typography>
      </Box>
    </Container>
  );
};

export default CountdownSection;
