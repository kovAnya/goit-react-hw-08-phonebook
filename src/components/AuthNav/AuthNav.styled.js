import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: coral;
  }
`;
