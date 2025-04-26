// src/components/minimal/MinimalDetailsSection.tsx
import React from 'react';
import {Box, Typography, Container, Paper, Divider, Stack} from '@mui/material';
import {AccessTime as ClockIcon, LocationOn as MapPinIcon, MusicNote as MusicIcon} from '@mui/icons-material';
import {rockTheme} from '../../themes/minimal/rockTheme';

const MinimalDetailsSection: React.FC = () => {
  // Detail item component
  const DetailItem: React.FC<{icon: React.ReactNode; title: string; content: string}> = ({icon, title, content}) => (
    <Box sx={{display: 'flex', mb: 4, alignItems: 'flex-start'}}>
      <Box
        sx={{
          mr: 2,
          color: rockTheme.accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant='subtitle1'
          fontWeight='bold'
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 1,
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography variant='body1'>{content}</Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      id='details'
      sx={{
        bgcolor: rockTheme.secondary,
        color: rockTheme.primary,
        py: 10,
        position: 'relative',
      }}
    >
      {/* Accent stripe */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '5px',
          height: '100%',
          bgcolor: rockTheme.accent,
        }}
      />

      <Container maxWidth='lg'>
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
          DETTAGLI EVENTO
        </Typography>

        <Stack direction={{xs: 'column', md: 'row'}} spacing={6} sx={{width: '100%'}}>
          {/* Left column - Event details */}
          <Box sx={{flex: 1, width: {xs: '100%', md: '50%'}}}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: rockTheme.blockOne,
                height: '100%',
              }}
            >
              <DetailItem
                icon={<ClockIcon fontSize='large' />}
                title='QUANDO'
                content='31 Dicembre 2025, dalle ore 19:00'
              />

              <DetailItem icon={<MapPinIcon fontSize='large' />} title='DOVE' content='La Vaca Straca, Villastellone' />

              <DetailItem icon={<MusicIcon fontSize='large' />} title='TEMA' content='Glam Rock' />
            </Paper>
          </Box>

          {/* Right column - Dress code and notes */}
          <Box sx={{flex: 1, width: {xs: '100%', md: '50%'}}}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: rockTheme.primary,
                color: rockTheme.secondary,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{mb: 4}}>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: rockTheme.accent,
                  }}
                >
                  DRESS CODE
                </Typography>
                <Typography variant='body1' sx={{fontSize: '1.1rem'}}>
                  Pigiamone intero (consigliato)
                </Typography>
              </Box>

              <Divider sx={{bgcolor: 'rgba(255,255,255,0.1)', my: 3}} />

              <Box>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: rockTheme.accent,
                  }}
                >
                  NOTA
                </Typography>
                <Typography variant='body1' sx={{fontSize: '1.1rem'}}>
                  Preparati a festeggiare il Capodanno più rock di sempre!
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MinimalDetailsSection;
