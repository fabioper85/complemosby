// src/components/DetailsSection.tsx
import React from 'react';
import {Box, Typography, Paper, Container} from '@mui/material';
import {AccessTime as ClockIcon, LocationOn as MapPinIcon, MusicNote as MusicIcon} from '@mui/icons-material';
import {rockTheme} from '../themes/rockTheme';
import SectionTitle from './SectionTitle';

const DetailsSection: React.FC = () => {
  return (
    <Container maxWidth='lg' sx={{py: 5, mb: 4, position: 'relative'}}>
      <Box id='details' sx={{mb: 5, pt: 4}}>
        <SectionTitle title='DETTAGLI EVENTO' />

        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4}}>
          <Box sx={{flex: 1}}>
            <Paper
              sx={{
                p: 4,
                bgcolor: rockTheme.dark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              <Box sx={{display: 'flex', mb: 3}}>
                <ClockIcon sx={{color: rockTheme.primary, mr: 2, fontSize: 28}} />
                <Box>
                  <Typography variant='subtitle1' fontWeight='bold' sx={{color: rockTheme.secondary}}>
                    QUANDO
                  </Typography>
                  <Typography variant='body1' sx={{color: 'white'}}>
                    31 Dicembre 2025, dalle ore 19:00
                  </Typography>
                </Box>
              </Box>

              <Box sx={{display: 'flex', mb: 3}}>
                <MapPinIcon sx={{color: rockTheme.primary, mr: 2, fontSize: 28}} />
                <Box>
                  <Typography variant='subtitle1' fontWeight='bold' sx={{color: rockTheme.secondary}}>
                    DOVE
                  </Typography>
                  <Typography variant='body1'sx={{color: 'white'}}>La Vaca Straca, Villastellone</Typography>
                </Box>
              </Box>

              <Box sx={{display: 'flex'}}>
                <MusicIcon sx={{color: rockTheme.primary, mr: 2, fontSize: 28}} />
                <Box>
                  <Typography variant='subtitle1' fontWeight='bold' sx={{color: rockTheme.secondary}}>
                    TEMA
                  </Typography>
                  <Typography variant='body1'sx={{color: 'white'}}>Glam Rock</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box sx={{flex: 1}}>
            <Paper
              sx={{
                p: 4,
                bgcolor: rockTheme.dark,
                borderRadius: 2,
                height: '100%',
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              <Typography variant='h6' fontWeight='bold' sx={{color: rockTheme.secondary, mb: 2}}>
                DRESS CODE
              </Typography>
              <Typography variant='body1' sx={{color: 'white', mb:4}}>
                Pigiamone intero (consigliato)
              </Typography>

              <Typography variant='h6' fontWeight='bold' sx={{mb: 2, color: rockTheme.secondary}}>
                NOTA
              </Typography>
              <Typography variant='body1'sx={{color: 'white'}}>Preparati a festeggiare il Capodanno più rock di sempre!</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailsSection;
