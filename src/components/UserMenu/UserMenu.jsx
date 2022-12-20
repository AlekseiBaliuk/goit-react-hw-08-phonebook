import * as React from 'react';
// import Button from '@mui/material/Button';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from '@mui/material';
import * as SC from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <SC.P>Welcome, {user.name}</SC.P>

      {/* <Button
        variant="contained"
        size="medium"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon fontSize="12px" />
      </Button> */}

      <IconButton onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};
