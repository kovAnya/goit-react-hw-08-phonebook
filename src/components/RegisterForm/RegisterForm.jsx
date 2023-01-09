import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Form, FormLabel, FormBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Username
        <input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <input type="password" name="password" />
      </FormLabel>
      <FormBtn type="submit">Register</FormBtn>
    </Form>
  );
};
