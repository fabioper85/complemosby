// src/components/SectionTitle.tsx
import React from 'react';
import {Typography} from '@mui/material';
import {rockTheme} from '../themes/rockTheme';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <Typography
      variant='h4'
      sx={{
        fontWeight: 'bold',
        color: rockTheme.primary,
        mb: 4,
        textAlign: 'center',
        position: 'relative',
        pb: 2,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          bgcolor: rockTheme.primary,
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
