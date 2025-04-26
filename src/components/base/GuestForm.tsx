// src/components/GuestForm.tsx
import React from 'react';
import {Paper, Box, Typography, IconButton, Stack, TextField, Button} from '@mui/material';
import {ConfirmationNumber as TicketIcon, Delete as DeleteIcon, Add as AddIcon} from '@mui/icons-material';
import {rockTheme} from '../../themes/base/rockTheme';
import {Guest} from '../../const/types';

interface GuestFormProps {
  guests: Guest[];
  handleGuestChange: (index: number, field: keyof Guest, value: string) => void;
  addGuest: () => void;
  removeGuest: (index: number) => void;
}

const GuestForm: React.FC<GuestFormProps> = ({guests, handleGuestChange, addGuest, removeGuest}) => {
  return (
    <Paper
      sx={{
        p: 4,
        mb: 4,
        border: `2px solid ${rockTheme.primary}`,
        bgcolor: rockTheme.lightDark,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant='h5'
          fontWeight='bold'
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <TicketIcon sx={{mr: 1}} />
          ROCK TICKET
        </Typography>
        <Typography variant='caption' sx={{color: rockTheme.primary}}>
          #31122025
        </Typography>
      </Box>

      {guests.map((guest, index) => (
        <Paper
          key={index}
          sx={{
            mb: 3,
            p: 3,
            bgcolor: rockTheme.dark,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant='subtitle1' fontWeight='bold'>
              Ospite {index + 1}
            </Typography>
            {index > 0 && (
              <IconButton onClick={() => removeGuest(index)} size='small' sx={{color: 'white'}}>
                <DeleteIcon />
              </IconButton>
            )}
          </Box>

          <Stack direction={{xs: 'column', sm: 'row'}} spacing={3}>
            <Box sx={{flex: 1}}>
              <TextField
                label='Nome'
                value={guest.name}
                onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                fullWidth
                required
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: rockTheme.primary,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Box>
            <Box sx={{flex: 1}}>
              <TextField
                label='Cognome'
                value={guest.surname}
                onChange={(e) => handleGuestChange(index, 'surname', e.target.value)}
                fullWidth
                required
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: rockTheme.primary,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
            </Box>
          </Stack>
        </Paper>
      ))}

      <Button
        startIcon={<AddIcon />}
        onClick={addGuest}
        variant='contained'
        sx={{
          mt: 2,
          bgcolor: rockTheme.lightDark,
          '&:hover': {bgcolor: '#333333'},
        }}
      >
        Aggiungi ospite
      </Button>
    </Paper>
  );
};

export default GuestForm;
