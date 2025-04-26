// src/components/minimal/RockHeader.tsx
import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, Typography, Box, Button, Container, IconButton} from '@mui/material';
import {Menu as MenuIcon, Logout as LogoutIcon} from '@mui/icons-material';
import {rockTheme, scrollToSection} from '../../themes/minimal/rockTheme';
import {useAuth} from '../../AuthContext';

const RockHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {logout} = useAuth(); // Aggiungiamo il hook useAuth per accedere alla funzione logout

  // Funzione per gestire il logout
  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
    } catch (err) {
      console.error('Errore durante il logout:', err);
    }
  };

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
          <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 4, alignItems: 'center'}}>
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

            {/* Aggiungiamo il pulsante di logout */}
            <Button
              color='inherit'
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              sx={{
                color: rockTheme.secondary,
                borderRadius: 1,
                ml: 2,
                bgcolor: rockTheme.accent,
                '&:hover': {
                  bgcolor: 'rgba(255, 60, 60, 0.8)',
                },
                px: 2,
              }}
            >
              Logout
            </Button>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{display: {xs: 'flex', md: 'none'}, alignItems: 'center'}}>
            {/* Logout icon per mobile */}
            <IconButton color='inherit' onClick={handleLogout} sx={{mr: 1, color: rockTheme.secondary}}>
              <LogoutIcon />
            </IconButton>

            <IconButton color='inherit' sx={{color: rockTheme.secondary}} onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
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
