import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input, Title } from '../RegisterForm/RegisterForm.styled';
import { ButtonReg, ButtonLogin, ContainerLogin } from './LoginForm.styled';
import { useLoginUserMutation } from 'redux/auth/authQueryAPI';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUser } from 'redux/auth/authSlice';

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [logIn] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRegistrate = () => navigate('/register');

  const loginUser = async credentials => {
    try {
      if (credentials) {
        const { data } = await logIn({
          email: credentials.email,
          password: credentials.password,
        });
        reset();
        dispatch(setUser(data.user));
        dispatch(setAuthToken(data.token));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ContainerLogin>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(data => {
          loginUser(data);
        })}
      >
        <label htmlFor="email">
          <Title>Email</Title>
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
          <Title>Password</Title>
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
        <ButtonLogin type="submit">Log in</ButtonLogin>
        <ButtonReg onClick={goRegistrate}>Registrate</ButtonReg>
      </form>
    </ContainerLogin>
  );
};
