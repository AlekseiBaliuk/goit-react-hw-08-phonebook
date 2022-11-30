import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <SC.NavList>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        <li>
          <SC.Link to="/contacts">Contacts</SC.Link>
        </li>
      </SC.NavList>
    </nav>
  );
};
