// src/components/RockHeader.tsx
import React from 'react';
import {AppBar, Toolbar, Typography, Box, Button, IconButton} from '@mui/material';
import {MusicNote as MusicIcon, Menu as MenuIcon} from '@mui/icons-material';
import {rockTheme, scrollToSection} from '../../themes/base/rockTheme';

const RockHeader: React.FC = () => {
  return (
    <AppBar position='sticky' sx={{bgcolor: rockTheme.dark, borderBottom: `1px solid ${rockTheme.primary}`}}>
      <Toolbar>
        <MusicIcon sx={{color: rockTheme.primary, mr: 1}} />
        <Typography variant='h6' component='div' sx={{flexGrow: 1, fontWeight: 'bold'}}>
          ROCK BIRTHDAY PARTY
        </Typography>
        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 3}}>
          <Button
            color='inherit'
            onClick={() => scrollToSection('details')}
            sx={{'&:hover': {color: rockTheme.primary}}}
          >
            DETTAGLI
          </Button>
          <Button
            color='inherit'
            onClick={() => scrollToSection('location')}
            sx={{'&:hover': {color: rockTheme.primary}}}
          >
            LOCATION
          </Button>
          <Button color='inherit' onClick={() => scrollToSection('rsvp')} sx={{'&:hover': {color: rockTheme.primary}}}>
            RSVP
          </Button>
        </Box>
        <IconButton color='inherit' sx={{display: {xs: 'flex', md: 'none'}}}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default RockHeader;
