import styled from 'styled-components';
import {ReactComponent as AddNewUserLogo} from '../../icons/add-user-svgrepo-com.svg'

export const Contaciner = styled.div`
position: absolute;
  margin-bottom: 20px;
  width: 200px;
  text-align: center;
  z-index: 5;
  top: -10px;
  left: -220px;
`;
export const Input = styled.input`
  font-size: 14px;
  height: 30px;
  border-radius: 5px;
  width: 100%;
  border: none;
  outline: 1px solid;
  padding-left: 10px;
  margin-bottom: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NewUser = styled(AddNewUserLogo)`
    
`

export const Button = styled.button`
    height: 35px;
    border-radius: 5px;
    border: 1px solid;
    background-color: #ebdcb2;
    font-weight: 700;
    cursor: pointer;
`

export const Title = styled.p`
    font-size: 24px;
    margin-bottom: 10px;
   
`