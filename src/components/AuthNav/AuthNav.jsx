import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SC.NavList>
      <li>
        <SC.Link to="/register">Register</SC.Link>
      </li>
      <li>
        <SC.Link to="/login">Log in</SC.Link>
      </li>
    </SC.NavList>
  );
};
