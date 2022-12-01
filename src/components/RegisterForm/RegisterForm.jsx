import { Box, Button, TextField } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';
// import * as SC from '../ContactForm/Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (error) {
      toast.error('User name or email already used');
    }

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
      onSubmit={handleSubmit}
    >
      <TextField label="Name" name="name" type="name" size="small" />
      <TextField label="Email" name="email" type="email" size="small" />
      <TextField
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
        Register
      </Button>
      <Toaster position="top-right" reverseOrder={true} />
    </Box>
    // <SC.Form onSubmit={handleSubmit}>
    //   <SC.Label>
    //     Username
    //     <input type="text" name="name" />
    //   </SC.Label>
    //   <SC.Label>
    //     Email
    //     <input type="email" name="email" />
    //   </SC.Label>
    //   <SC.Label>
    //     Password
    //     <input type="password" name="password" />
    //   </SC.Label>
    //   <SC.Button type='submit'>Register</SC.Button>
    // </SC.Form>
  );
};
