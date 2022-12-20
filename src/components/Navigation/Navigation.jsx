import { useAuth } from 'hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const mathches = useMediaQuery('(max-width:480px)');

  return (
    <nav>
      <SC.NavList>
        <li>
          {mathches === true ? (
            <SC.Link to="/">
              <HomeIcon />
            </SC.Link>
          ) : (
            <SC.Link to="/">Home</SC.Link>
          )}
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
