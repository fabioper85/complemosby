// src/components/minimal/MinimalLocationSection.tsx
import React from 'react';
import {Box, Typography, Container, Button, Stack} from '@mui/material';
import {LocationOn as MapPinIcon, Instagram as InstagramIcon, Facebook as FacebookIcon} from '@mui/icons-material';
import {rockTheme} from '../../themes/minimal/rockTheme';

const MinimalLocationSection: React.FC = () => {
  return (
    <Box
      id='location'
      sx={{
        bgcolor: rockTheme.primary,
        color: rockTheme.secondary,
        py: 10,
        position: 'relative',
      }}
    >
      {/* Accent block */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '40%',
          height: '25%',
          bgcolor: rockTheme.accent,
          zIndex: 0,
        }}
      />

      <Container maxWidth='lg' sx={{position: 'relative', zIndex: 1}}>
        <Stack direction={{xs: 'column', md: 'row'}} spacing={6} sx={{width: '100%'}}>
          <Box sx={{width: {xs: '100%', md: '50%'}}}>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                mb: 6,
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '4px',
                  bottom: '-12px',
                  left: 0,
                  backgroundColor: rockTheme.accent,
                },
              }}
            >
              LOCATION
            </Typography>

            <Typography variant='h6' fontWeight='bold' sx={{mb: 2}}>
              LA VACA STRACA
            </Typography>

            <Typography
              variant='body1'
              sx={{
                mb: 4,
                maxWidth: '80%',
                fontSize: '1.1rem',
              }}
            >
              Un luogo unico dove la tradizione incontra l'atmosfera rock. Situato in Villastellone, offre lo spazio
              perfetto per il nostro evento Glam Rock di fine anno.
            </Typography>

            <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{mb: 4}}>
              <Button
                href='https://www.instagram.com/lavacastraca/'
                target='_blank'
                rel='noopener noreferrer'
                variant='outlined'
                startIcon={<InstagramIcon />}
                sx={{
                  color: rockTheme.secondary,
                  borderColor: rockTheme.secondary,
                  '&:hover': {
                    bgcolor: rockTheme.secondary,
                    borderColor: rockTheme.secondary,
                    color: rockTheme.primary,
                  },
                  py: 1.5,
                }}
              >
                INSTAGRAM
              </Button>

              <Button
                href='https://www.facebook.com/lavacastraca/'
                target='_blank'
                rel='noopener noreferrer'
                variant='outlined'
                startIcon={<FacebookIcon />}
                sx={{
                  color: rockTheme.secondary,
                  borderColor: rockTheme.secondary,
                  '&:hover': {
                    bgcolor: rockTheme.secondary,
                    borderColor: rockTheme.secondary,
                    color: rockTheme.primary,
                  },
                  py: 1.5,
                }}
              >
                FACEBOOK
              </Button>
            </Stack>
          </Box>

          <Box sx={{width: {xs: '100%', md: '50%'}}}>
            {/* Map placeholder or image would go here */}
            <Box
              sx={{
                height: '100%',
                minHeight: 300,
                bgcolor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* This would be replaced with an actual map or image of the location */}
              <Box sx={{position: 'relative', zIndex: 1, textAlign: 'center'}}>
                <MapPinIcon sx={{fontSize: 60, color: rockTheme.accent, mb: 2}} />
                <Typography variant='body1' sx={{maxWidth: 300}}>
                  Via Poirino, 2, 10029 Villastellone TO
                </Typography>
                <Button
                  href='https://www.google.it/maps/place/La+Vaca+Straca/@44.9163186,7.7821076,17z/data=!3m1!4b1!4m6!3m5!1s0x478809676b6073cd:0xa251229bbebddfe0!8m2!3d44.9163148!4d7.7846825!16s%2Fg%2F11gmgxwr0x?hl=it&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='text'
                  sx={{
                    color: rockTheme.accent,
                    mt: 2,
                    textTransform: 'uppercase',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  INDICAZIONI
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MinimalLocationSection;
