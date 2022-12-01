import * as React from 'react';
import Button from '@mui/material/Button';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from '@mui/material';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <SC.P>Welcome, {user.name}</SC.P>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}

      <Button
        variant="contained"
        size="medium"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};