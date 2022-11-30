import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as SC from '../ContactForm/Form/Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label>
        Email
        <input type="email" name="email" />
      </SC.Label>
      <SC.Label>
        Password
        <input type="password" name="password" />
      </SC.Label>
      <SC.Button type="submit">Log in</SC.Button>
    </SC.Form>
  );
};
