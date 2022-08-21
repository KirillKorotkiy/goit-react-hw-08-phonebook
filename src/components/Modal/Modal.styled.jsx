import styled from 'styled-components';
import { ReactComponent as CloseLogo } from 'icons/close-svgrepo-com.svg';
import { ReactComponent as UpdateContact } from 'icons/update-repeat-svgrepo-com.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const Modal = styled.div`
  width: 450px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const Close = styled(CloseLogo)``;
export const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const Input = styled.input`
  padding-left: 10px;
  font-size: 18px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  outline: 1px solid;
`;
export const ButtonUpdate = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 300px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid;
  background-color: #662e1c;
  color: #ffffff;
`;
export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;
export const UpdateLogo = styled(UpdateContact)`
  width: 100px;
  height: 120px;
`;
