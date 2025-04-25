// src/components/LocationSection.tsx
import React from 'react';
import {Box, Typography, Paper, Stack, Button} from '@mui/material';
import {LocationOn as MapPinIcon, Instagram as InstagramIcon, Facebook as FacebookIcon} from '@mui/icons-material';
import {rockTheme} from '../themes/rockTheme';
import SectionTitle from './SectionTitle';

const LocationSection: React.FC = () => {
  return (
    <Box id='location' sx={{mb: 5, pt: 4}}>
      <SectionTitle title='LOCATION' />

      <Paper
        sx={{
          p: 4,
          bgcolor: rockTheme.dark,
          borderRadius: 2,
          border: `1px solid rgba(255,255,255,0.1)`,
        }}
      >
        <Typography variant='h6' fontWeight='bold' sx={{mb: 2}}>
          LA VACA STRACA
        </Typography>
        <Typography variant='body1' sx={{mb: 4}}>
          Un luogo unico dove la tradizione incontra l'atmosfera rock.
        </Typography>

        <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
          <Button
            href='https://www.instagram.com/lavacastraca/'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            startIcon={<InstagramIcon />}
            sx={{
              bgcolor: rockTheme.primary,
              '&:hover': {
                bgcolor: '#cc3030',
              },
            }}
          >
            INSTAGRAM
          </Button>

          <Button
            href='https://www.facebook.com/lavacastraca/'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            startIcon={<FacebookIcon />}
            sx={{
              bgcolor: rockTheme.primary,
              '&:hover': {
                bgcolor: '#cc3030',
              },
            }}
          >
            FACEBOOK
          </Button>

          <Button
            href='https://maps.app.goo.gl/123'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            startIcon={<MapPinIcon />}
            sx={{
              bgcolor: rockTheme.primary,
              '&:hover': {
                bgcolor: '#cc3030',
              },
            }}
          >
            INDICAZIONI
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LocationSection;
