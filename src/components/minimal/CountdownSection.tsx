// src/components/minimal/MinimalCountdownSection.tsx
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { rockTheme } from '../../themes/minimal/rockTheme';
import { CountdownState } from '../../const/types';

const MinimalCountdownSection: React.FC = () => {
  // Countdown logic
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

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // CountdownBox component for individual time units
  const CountdownBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <Box
      sx={{
        width: { xs: '70px', sm: '100px', md: '120px' },
        height: { xs: '70px', sm: '100px', md: '120px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: rockTheme.accent,
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: rockTheme.secondary,
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 1,
          color: rockTheme.secondary,
          mt: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        bgcolor: rockTheme.primary,
        overflow: 'hidden',
      }}
    >
      {/* Left accent block */}
      <Box 
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '30%',
          height: '100%',
          bgcolor: rockTheme.accent,
          clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Replace Grid with Stack for a simpler layout */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={5} 
          alignItems="center"
        >
          {/* Title and subtitle */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 'bold',
                color: rockTheme.secondary,
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              ROCK <Box component="span" sx={{ color: rockTheme.accent }}>BIRTHDAY</Box>
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: rockTheme.secondary,
                mb: 4,
                opacity: 0.8,
              }}
            >
              31.12.2025
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: rockTheme.secondary,
                mb: 4,
                maxWidth: '90%',
              }}
            >
              Preparati a festeggiare il Capodanno più rock di sempre con un evento unico in stile Glam Rock!
            </Typography>
          </Box>

          {/* Countdown boxes */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 3 },
                justifyContent: { xs: 'center', md: 'flex-end' },
              }}
            >
              <CountdownBox value={countdown.days} label="Giorni" />
              <CountdownBox value={countdown.hours} label="Ore" />
              <CountdownBox value={countdown.minutes} label="Minuti" />
              <CountdownBox value={countdown.seconds} label="Secondi" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MinimalCountdownSection;