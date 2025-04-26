// src/components/m3/CountdownContent.tsx
import React from 'react';
import {Box, Container, Typography, Button, Stack} from '@mui/material';
import CountdownTimer from './CountdownTimer';
import {rockTheme} from '../../../themes/minimal/rockTheme';

/**
 * The content component for the countdown section.
 * This includes the title, subtitle, description text, and call-to-action buttons.
 */
const CountdownContent: React.FC = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        position: 'relative',
        zIndex: 1,
        py: 6,
      }}
    >
      {/* Reusing the existing Stack layout from MinimalCountdownSection */}
      <Stack direction={{xs: 'column', md: 'row'}} spacing={5} alignItems='center'>
        {/* Title and CTA section */}
        <Box sx={{width: {xs: '100%', md: '50%'}}}>
          {/* Enhanced typography styles with drop shadow */}
          <Typography
            variant='h1'
            className='rock-title-font'
            sx={{
              fontSize: {xs: '5rem', md: '8.5rem'},
              // fontWeight: 'bold',
              color: rockTheme.secondary,
              // mb: 1,
              lineHeight: 1.1,
              // textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.3)', // Smooth layered drop shadow
              position: 'relative',
              zIndex: 1,
              '&::after': {
                content: '"Rock"',
                position: 'absolute',
                top: '-0.05em',
                left: '-0.09em',
                right: 0,
                bottom: 0,
                zIndex: -1,
                color: rockTheme.primary,
                opacity: 0.5
                // textShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', // Secondary shadow for depth
              }
            }}
          >
            Rock
            <Box 
              component='span' 
              sx={{
                color: rockTheme.secondary, 
                // marginLeft: '1rem',
                // textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.4)', // Slightly stronger shadow for accent color
                display: 'inline-block',
                position: 'relative',
                top: '-2rem',
                '&::after': {
                  content: '"Birthday"',
                  position: 'absolute',
                  // width: "100%",
                  // height: "30px",
                  top: '0.08em',
                  left: '0.05em',
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                  color: rockTheme.primary,
                  // mixBlendMode: 'screen',
                  // textShadow: '0 6px 10px rgba(0, 0, 0, 0.3)', // Secondary shadow for accent text
                }
              }}
            >
              Birthday
            </Box>
          </Typography>

          {/* <Typography
            variant='h5'
            sx={{
              color: rockTheme.secondary,
              mb: 2,
              opacity: 0.8,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Lighter shadow for subtitle
            }}
          >
            31.12.2025
          </Typography> */}

          <Typography
            variant='body1'
            sx={{
              color: rockTheme.secondary,
              mb: 4,
              maxWidth: '90%',
            }}
          >
            Preparati a festeggiare il Capodanno più rock di sempre con un evento unico in stile Glam Rock!
          </Typography>

          {/* CTA Buttons in Material You style */}
          <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{mb: {xs: 5, md: 0}}}>
            <Button
              variant='contained'
              sx={{
                bgcolor: rockTheme.accent,
                color: rockTheme.secondary,
                py: 1.5,
                px: 3,
                // borderRadius: '100px', // M3 uses pill-shaped buttons
                textTransform: 'none', // M3 doesn't use all caps for buttons
                fontWeight: 500,
                '&:hover': {
                  bgcolor: '#cc3030', // Slightly darker accent color for hover
                },
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Light shadow for elevation
                fontSize: '1rem',
              }}
            >
              Voglio partecipare
            </Button>

            <Button
              variant='outlined'
              sx={{
                color: rockTheme.secondary,
                borderColor: rockTheme.secondary,
                py: 1.5,
                px: 3,
                // borderRadius: '100px',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  borderColor: rockTheme.secondary,
                  bgcolor: rockTheme.secondary,
                  color: rockTheme.primary
                },
                fontSize: '1rem',
              }}
            >
              Dettagli
            </Button>
          </Stack>
        </Box>

        {/* Countdown timer component */}
        <Box sx={{width: {xs: '100%', md: '50%'}}}>
          <CountdownTimer />
        </Box>
      </Stack>
    </Container>
  );
};

export default CountdownContent;