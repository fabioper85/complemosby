// src/Login.tsx
import React, {useState, FormEvent} from 'react';
import {useAuth} from './AuthContext';
import {Link} from 'react-router-dom';
import {rockTheme} from './themes/minimal/rockTheme';

// Material UI
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Alert,
  CircularProgress,
  Link as MuiLink,
} from '@mui/material';

// Material Icons
import {Email as EmailIcon, Lock as LockIcon, MusicNote as MusicNoteIcon} from '@mui/icons-material';

const Login: React.FC = () => {
  const {login, error: authError} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: rockTheme.primary,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{textAlign: 'center', mb: 4}}>
          <MusicNoteIcon sx={{fontSize: 60, color: rockTheme.accent}} />
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{
              color: rockTheme.accent,
              fontWeight: 'bold',
            }}
          >
            Rock Birthday Party
          </Typography>
        </Box>

        <Paper
          // elevation={12}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: 'transparent',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant='h4' component='h2' align='center' gutterBottom sx={{color: rockTheme.secondary, mb: 2}}>
            Accedi
          </Typography>

          <Typography align='center' sx={{mb: 3, color: 'rgba(255,255,255,0.8)'}}>
            Per visualizzare i dettagli dell'evento, effettua l'accesso con le tue credenziali.
          </Typography>

          {(error || authError) && (
            <Alert severity='error' sx={{mb: 3, bgcolor: 'rgba(211, 47, 47, 0.2)', color: 'white'}}>
              {error || authError}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  color: rockTheme.secondary,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: rockTheme.secondary,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />

            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              margin='normal'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type='password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: rockTheme.secondary,
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              size='large'
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.5,
                bgcolor: rockTheme.secondary,
                color: rockTheme.primary,
                '&:hover': {
                  bgcolor: rockTheme.accent,
                  color: rockTheme.secondary,
                },
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              {loading ? <CircularProgress size={24} color='inherit' /> : 'Accedi'}
            </Button>

            <Box sx={{mt: 3, textAlign: 'center'}}>
              <Typography
                variant='body2'
                sx={{
                  color: rockTheme.secondary,
                  textDecoration: 'none',
                }}
              >
                Non hai ancora un account?{' '}
                <MuiLink
                  component={Link}
                  to='/register'
                  sx={{
                    color: rockTheme.accent,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                    textDecoration: 'none',
                  }}
                >
                  Registrati ora
                </MuiLink>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
