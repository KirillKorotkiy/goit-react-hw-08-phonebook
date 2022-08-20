import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Input, Title, Button } from './RegisterForm.styled';
import { useCreateNewUserMutation } from 'redux/auth/authQueryAPI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { setAuthToken, setUser } from 'redux/auth/authSlice';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [createNewUser] = useCreateNewUserMutation();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const addNewUser = async credentials => {
    try {
      if (credentials) {
        const { data } = await createNewUser({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        });
        reset();
        dispatch(setAuthToken(data.token));
        dispatch(setUser({ name: credentials.name, email: credentials.email }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Title>Registrate</Title>
        <form
          onSubmit={handleSubmit(data => {
            addNewUser(data);
          })}
        >
          <label htmlFor="name">
            <Input
              type="text"
              name="name"
              {...register('name', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Name..."
            />
          </label>
          <label htmlFor="email">
            <Input
              type="email"
              name="email"
              {...register('email', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Email..."
            />
          </label>
          <label htmlFor="password">
            <Input
              type="password"
              name="password"
              {...register('password', {
                register: true,
                required: 'This is required',
                suggested: 'current-password',
              })}
              placeholder="Password..."
            />
          </label>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </>
  );
};
