// src/components/AllergyForm.tsx
import React from 'react';
import {Box, Typography, FormGroup, FormControlLabel, Checkbox, TextField} from '@mui/material';
import {Warning as AlertIcon} from '@mui/icons-material';
import {rockTheme} from '../../themes/base/rockTheme';
import {Allergies} from '../../const/types';

interface AllergyFormProps {
  allergies: Allergies;
  handleAllergyChange: (allergy: keyof Allergies) => void;
  handleAllergyTextChange: (value: string) => void;
}

const AllergyForm: React.FC<AllergyFormProps> = ({allergies, handleAllergyChange, handleAllergyTextChange}) => {
  return (
    <Box sx={{mb: 4}}>
      <Typography
        variant='h5'
        fontWeight='bold'
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AlertIcon sx={{mr: 1}} />
        ALLERGIE E INTOLLERANZE
      </Typography>

      <Typography
        variant='body2'
        sx={{
          color: rockTheme.primary,
          mb: 3,
        }}
      >
        Per aiutarci a preparare un menu adatto a tutti, segna le eventuali allergie o intolleranze.
      </Typography>

      <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        <Box sx={{width: {xs: '100%', sm: '50%'}}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergies.glutine}
                  onChange={() => handleAllergyChange('glutine')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: rockTheme.primary,
                    },
                  }}
                />
              }
              label='Glutine'
            />
          </FormGroup>
        </Box>

        <Box sx={{width: {xs: '100%', sm: '50%'}}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergies.lattosio}
                  onChange={() => handleAllergyChange('lattosio')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: rockTheme.primary,
                    },
                  }}
                />
              }
              label='Lattosio'
            />
          </FormGroup>
        </Box>

        <Box sx={{width: {xs: '100%', sm: '50%'}}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergies.fruttaDiMare}
                  onChange={() => handleAllergyChange('fruttaDiMare')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: rockTheme.primary,
                    },
                  }}
                />
              }
              label='Frutta di mare'
            />
          </FormGroup>
        </Box>

        <Box sx={{width: {xs: '100%', sm: '50%'}}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allergies.fruttaSecca}
                  onChange={() => handleAllergyChange('fruttaSecca')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: rockTheme.primary,
                    },
                  }}
                />
              }
              label='Frutta secca'
            />
          </FormGroup>
        </Box>
      </Box>

      <Box sx={{mt: 3}}>
        <Typography variant='body2' sx={{mb: 1}}>
          Altre allergie o note
        </Typography>
        <TextField
          multiline
          rows={2}
          value={allergies.altro}
          onChange={(e) => handleAllergyTextChange(e.target.value)}
          fullWidth
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
          }}
        />
      </Box>
    </Box>
  );
};

export default AllergyForm;
