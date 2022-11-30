import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';
import * as SC from '../ContactForm/Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label>
        Username
        <input type="text" name="name" />
      </SC.Label>
      <SC.Label>
        Email
        <input type="email" name="email" />
      </SC.Label>
      <SC.Label>
        Password
        <input type="password" name="password" />
      </SC.Label>
      <SC.Button type='submit'>Register</SC.Button>
    </SC.Form>
  );
};
