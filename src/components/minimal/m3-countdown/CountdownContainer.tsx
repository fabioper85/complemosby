// src/components/m3/CountdownContainer.tsx
import React from 'react';
import {Box} from '@mui/material';
import CountdownContent from './CountdownContent';
import {rockTheme} from '../../../themes/minimal/rockTheme';

/**
 * The main container component for the countdown section.
 * This handles the overall layout and background styling.
 */
const CountdownContainer: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        // bgcolor: rockTheme.primary,
        overflow: 'hidden',
        backgroundImage:
          'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: 'hue-rotate(180deg)',
        pt: {xs: 8, md: 0}, // Add padding top on mobile for the app bar

        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0.05em',
          left: '0.05em',
          right: 0,
          bottom: 0,
          zIndex: 0,
          bgcolor: rockTheme.primary,
          mixBlendMode: 'darken',
          opacity: 0.8,
          // textShadow: '0 6px 20px rgba(0, 0, 0, 0.25)', // Secondary shadow for accent text
        },
      }}
    >
      {/* Left accent block - keeping the existing diagonal shape */}
      <Box
        sx={{
          position: 'absolute',
          left: '-2rem',
          top: 0,
          width: '30%',
          height: '100%',
          bgcolor: rockTheme.accent,
          clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)',
          zIndex: 1,
        }}
      />

      {/* Content container with title, CTAs and countdown */}
      <CountdownContent />
    </Box>
  );
};

export default CountdownContainer;
