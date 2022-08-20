import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }
`;
