import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (error) {
      return toast.error('No such user');
    }

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        margin: '0 auto',
        maxWidth: '360px',
        pt: '60px',
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="email"
        label="Email"
        name="email"
        type="email"
        size="small"
      />
      <TextField
        id="password"
        label="Password"
        name="password"
        type="password"
        size="small"
      />

      <Button
        sx={{ width: '120px', mx: 'auto' }}
        type="submit"
        variant="outlined"
      >
        Log in
      </Button>
      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};
