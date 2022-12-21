import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@mui/material';
import * as SC from './AppBar.styled';
// import { Container } from 'components/Container/Container';

import useMediaQuery from '@mui/material/useMediaQuery';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  // const isDesktop = window.innerWidth > 500;

  const isMobile = useMediaQuery('(max-width:480px)');

  return (
    // <Container>
    <SC.Header>
      <Navigation />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '15px',
        }}
      >
        {!isMobile && <SC.HeaderTitle>Phonebook</SC.HeaderTitle>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </SC.Header>
    // </Container>
  );
};
