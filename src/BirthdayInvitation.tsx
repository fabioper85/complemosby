// src/BirthdayInvitation.tsx
import React from 'react';
import Header from './Header';

// Material UI
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Paper,
  Divider,
  IconButton,
  Link,
  FormGroup,
  CircularProgress,
  Stack,
} from '@mui/material';

// Material Icons
import {
  AccessTime as ClockIcon,
  LocationOn as MapPinIcon,
  CheckCircle as CheckIcon,
  Warning as AlertIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  MusicNote as MusicIcon,
  ConfirmationNumber as TicketIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import CountdownSection from './components/CountdownSection';
import DetailsSection from './components/DetailsSection';
import RockHeader from './components/RockHeader';

const BirthdayInvitation: React.FC = () => {
  // Tema custom
  const theme = {
    primary: '#6d28d9', // purple-700
    secondary: '#ec4899', // pink-500
    background: 'linear-gradient(to bottom,rgb(94, 94, 94), #000)',
    success: '#10b981', // green-500
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.background,
        color: 'white',
        pb: 4,
      }}
    >
      {/* Header con componente separato */}
      {/* <Header /> */}
      <RockHeader />

      {/* Hero Section with Countdown */}
      <CountdownSection />

      {/* Main Content */}
      <DetailsSection />

      {/* Footer */}
      <Box
        component='footer'
        sx={{
          py: 3,
          textAlign: 'center',
          color: theme.secondary,
        }}
      >
        <Typography variant='body2'>© 2025 Rock Birthday Party | Ci vediamo il 31/12/2025!</Typography>
      </Box>
    </Box>
  );
};

export default BirthdayInvitation;
