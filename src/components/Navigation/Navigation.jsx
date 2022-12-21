import { useAuth } from 'hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as SC from './Navigation.styled';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const mathches = useMediaQuery('(max-width:480px)');

  return (
    <nav>
      <SC.NavList>
        <li>
          {mathches === true ? (
            <SC.Link to="/">
              {/* <IconButton> */}
              <HomeIcon sx={{ height: '18px' }} />
              {/* </IconButton> */}
            </SC.Link>
          ) : (
            <SC.Link to="/">Home</SC.Link>
          )}
        </li>
        {isLoggedIn && (
          <li>
            {mathches === true ? (
              <SC.Link to="/contacts">
                <ContactPhoneIcon sx={{ height: '18px' }} />
              </SC.Link>
            ) : (
              <SC.Link to="/contacts">Contacts</SC.Link>
            )}
          </li>
        )}
      </SC.NavList>
    </nav>
  );
};
