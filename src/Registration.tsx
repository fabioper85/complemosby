// src/Registration.tsx
import React, {useState, FormEvent} from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {auth, db} from './firebase';
import {Link} from 'react-router-dom';

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
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  PersonAdd as PersonAddIcon,
  Check as CheckIcon,
  MusicNote as MusicNoteIcon,
} from '@mui/icons-material';

const Registration: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleRegistration = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Verifica password
    if (password !== confirmPassword) {
      setError('Le password non corrispondono');
      setLoading(false);
      return;
    }

    // Verifica lunghezza password
    if (password.length < 6) {
      setError('La password deve contenere almeno 6 caratteri');
      setLoading(false);
      return;
    }

    try {
      // Crea utente in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Aggiorna il profilo utente con il nome
      await updateProfile(user, {
        displayName: name,
      });

      // Salva i dati utente in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        displayName: name,
        email: email,
        role: 'user', // Default role
        createdAt: new Date(),
      });

      setSuccess(true);
    } catch (err: any) {
      // Gestione errori specifici
      if (err.code === 'auth/email-already-in-use') {
        setError('Questo indirizzo email è già registrato');
      } else if (err.code === 'auth/invalid-email') {
        setError('Indirizzo email non valido');
      } else {
        setError('Errore durante la registrazione. Riprova più tardi.');
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  // Tema custom
  const theme = {
    primary: '#6d28d9', // purple-700
    secondary: '#ec4899', // pink-500
    background: 'linear-gradient(to bottom, #4c1d95, #000)',
    success: '#10b981', // green-500
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.background,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{textAlign: 'center', mb: 4}}>
          <MusicNoteIcon sx={{fontSize: 60, color: theme.secondary}} />
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontFamily: "'Rock Salt', cursive",
            }}
          >
            Rock Birthday Party
          </Typography>
          <Typography variant='h6' sx={{color: 'rgba(255,255,255,0.8)'}}>
            Registrati per accedere all'evento
          </Typography>
        </Box>

        {success ? (
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: 'rgba(16, 185, 129, 0.15)', // green with opacity
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            <Box sx={{display: 'flex', justifyContent: 'center', mb: 2}}>
              <CheckIcon sx={{fontSize: 48, color: theme.success}} />
            </Box>
            <Typography variant='h5' align='center' sx={{mb: 2, fontWeight: 'bold'}}>
              Registrazione completata!
            </Typography>
            <Typography align='center' sx={{mb: 3}}>
              Il tuo account è stato creato con successo.
            </Typography>
            <Box sx={{textAlign: 'center'}}>
              <Button
                component={Link}
                to='/login'
                variant='contained'
                size='large'
                sx={{
                  bgcolor: theme.secondary,
                  '&:hover': {
                    bgcolor: '#d61f69',
                  },
                  px: 4,
                }}
              >
                Accedi ora
              </Button>
            </Box>
          </Paper>
        ) : (
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: 'rgba(91, 33, 182, 0.5)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant='h4' component='h2' align='center' gutterBottom sx={{color: 'white', mb: 3}}>
              Registrazione
            </Typography>

            {error && (
              <Alert severity='error' sx={{mb: 3, bgcolor: 'rgba(211, 47, 47, 0.2)', color: 'white'}}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleRegistration}>
              <TextField
                label='Nome'
                variant='outlined'
                fullWidth
                margin='normal'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PersonIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.secondary,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />

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
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.secondary,
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
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.secondary,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                helperText={
                  <Typography variant='caption' sx={{color: 'rgba(255, 255, 255, 0.6)'}}>
                    Minimo 6 caratteri
                  </Typography>
                }
              />

              <TextField
                label='Conferma Password'
                variant='outlined'
                fullWidth
                margin='normal'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                      borderColor: theme.secondary,
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
                startIcon={loading ? null : <PersonAddIcon />}
                sx={{
                  mt: 2,
                  py: 1.5,
                  bgcolor: theme.secondary,
                  '&:hover': {
                    bgcolor: '#d61f69',
                  },
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                {loading ? <CircularProgress size={24} color='inherit' /> : 'Registrati'}
              </Button>

              <Box sx={{mt: 3, textAlign: 'center'}}>
                <Typography variant='body2'>
                  Hai già un account?{' '}
                  <MuiLink
                    component={Link}
                    to='/login'
                    sx={{
                      color: theme.secondary,
                      '&:hover': {
                        color: '#f472b6',
                      },
                      textDecoration: 'none',
                    }}
                  >
                    Accedi
                  </MuiLink>
                </Typography>
              </Box>
            </form>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Registration;
