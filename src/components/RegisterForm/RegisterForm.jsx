// import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
// import * as yup from 'yup';
import { signup } from 'redux/auth/operations';

export const RegisterForm = () => {
  // const [er, setEr] = useState(null);
  const dispatch = useDispatch();
  const { error } = useAuth();

  // let schema = yup.object({
  //   name: yup.string().required('Name is required'),
  //   email: yup.string().email().required('Email is required'),
  //   password: yup.string().required('Password is required'),
  // });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (error) {
      toast.error('User name or email already used');
    }

    // const registerData = {
    //   name: form.elements.name.value.trim(),
    //   email: form.elements.email.value.trim(),
    //   password: form.elements.password.value.trim(),
    // };


    // schema
    //   .validate({ registerData })
    //   .then(() => dispatch(signup(registerData)))
    //   .catch(e => setEr(e));

    dispatch(
      signup({
        name: form.elements.name.value,
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
      error="true"
      validate="true"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        name="name"
        type="name"
        size="small"
        // error={er && Boolean(er)}
        // helperText={er && 'Invalid name'}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        size="small"
        // error={er && Boolean(er)}
        // helperText="Invalid email"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        size="small"
        // error={er && Boolean(er)}
        // helperText="Invalid password"
      />

      <Button
        sx={{ width: '120px', mx: 'auto' }}
        type="submit"
        variant="outlined"
      >
        Register
      </Button>
      <Toaster position="top-right" reverseOrder={true} />
    </Box>
  );
};
