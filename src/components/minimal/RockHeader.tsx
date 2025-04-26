// src/components/MinimalRockHeader.tsx
import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, Typography, Box, Button, Container, IconButton} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {rockTheme, scrollToSection} from '../../themes/minimal/rockTheme';

const RockHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        bgcolor: scrolled ? rockTheme.primary : 'transparent',
        boxShadow: scrolled ? 1 : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              color: rockTheme.secondary,
            }}
          >
            ROCK BIRTHDAY
          </Typography>

          {/* Desktop menu */}
          <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 4}}>
            <Button
              color='inherit'
              onClick={() => scrollToSection('details')}
              sx={{
                color: rockTheme.secondary,
                borderBottom: '2px solid transparent',
                borderRadius: 0,
                '&:hover': {
                  borderBottom: `2px solid ${rockTheme.accent}`,
                  backgroundColor: 'transparent',
                },
              }}
            >
              DETAILS
            </Button>
            <Button
              color='inherit'
              onClick={() => scrollToSection('location')}
              sx={{
                color: rockTheme.secondary,
                borderBottom: '2px solid transparent',
                borderRadius: 0,
                '&:hover': {
                  borderBottom: `2px solid ${rockTheme.accent}`,
                  backgroundColor: 'transparent',
                },
              }}
            >
              LOCATION
            </Button>
            <Button
              color='inherit'
              onClick={() => scrollToSection('rsvp')}
              sx={{
                color: rockTheme.secondary,
                borderBottom: '2px solid transparent',
                borderRadius: 0,
                '&:hover': {
                  borderBottom: `2px solid ${rockTheme.accent}`,
                  backgroundColor: 'transparent',
                },
              }}
            >
              RSVP
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton color='inherit' sx={{display: {xs: 'flex', md: 'none'}}} onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: {xs: 'flex', md: 'none'},
            flexDirection: 'column',
            bgcolor: rockTheme.primary,
            py: 2,
          }}
        >
          <Button
            color='inherit'
            onClick={() => {
              scrollToSection('details');
              setMobileMenuOpen(false);
            }}
            sx={{
              color: rockTheme.secondary,
              py: 1,
            }}
          >
            DETAILS
          </Button>
          <Button
            color='inherit'
            onClick={() => {
              scrollToSection('location');
              setMobileMenuOpen(false);
            }}
            sx={{
              color: rockTheme.secondary,
              py: 1,
            }}
          >
            LOCATION
          </Button>
          <Button
            color='inherit'
            onClick={() => {
              scrollToSection('rsvp');
              setMobileMenuOpen(false);
            }}
            sx={{
              color: rockTheme.secondary,
              py: 1,
            }}
          >
            RSVP
          </Button>
        </Box>
      )}
    </AppBar>
  );
};

export default RockHeader;
