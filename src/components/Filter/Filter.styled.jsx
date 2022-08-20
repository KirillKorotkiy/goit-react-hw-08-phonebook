import styled from 'styled-components';
import {ReactComponent as SearchLogo} from 'icons/search-svgrepo-com.svg'


export const Title = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  outline: 1px solid;
`;
export const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  position: absolute;
  top: 260px;
  left: -300px;
`;

export const Logo = styled(SearchLogo)`
    position: absolute;
    right: 5px;
    bottom: 35px;
`