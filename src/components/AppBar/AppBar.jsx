import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import * as SC from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <SC.Header>
      <Navigation />
      <SC.HeaderTitle>Phonebook</SC.HeaderTitle>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
