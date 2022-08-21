import styled from 'styled-components';
import { ReactComponent as Logo } from 'icons/contact-svgrepo-com.svg';




export const List = styled.ul`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
  margin-bottom: 20px;
  color: #3d6889;
`;

export const Item = styled.li`
  padding: 5px;
  margin-bottom: 20px;
  text-align: center;
  flex-basis: 20%;
  background-color: #ebdcb2;
  border-radius: 20px;
  :not(:last-child) {
    margin-right: 35px;
  }
`;

export const ContactCard = styled.div``;
export const Name = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  
`;
export const Number = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
`;

export const UpdateButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-image: url('https://www.svgrepo.com/show/206424/rotate-update.svg');
`;
export const DeleteButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-image: url('https://www.svgrepo.com/show/92817/delete.svg');
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
`;
export const Icon = styled(Logo)`
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const Spiner = styled.div`
display: flex;
justify-content: center;


`