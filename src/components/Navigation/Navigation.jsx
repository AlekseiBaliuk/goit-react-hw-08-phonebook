import { useAuth } from 'hooks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <SC.NavList>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        {isLoggedIn && (
          <li>
            <SC.Link to="/contacts">Contacts</SC.Link>
          </li>
        )}
      </SC.NavList>
    </nav>
  );
};
