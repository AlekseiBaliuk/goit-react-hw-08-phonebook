import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <SC.Link to="/register">Register</SC.Link>
      <SC.Link to="/login">Log in</SC.Link>
    </div>
  );
};
