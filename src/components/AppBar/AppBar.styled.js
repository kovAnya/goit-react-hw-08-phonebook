import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 20px 30px 20px 60px;
  justify-content: space-between;
  align-items: center;
  background-color: bisque;
  height: 70px;
  font-size: 24px;
`;

export const Navigation = styled.nav`
  margin-right: 30px;
`;

export const MainLink = styled(NavLink)`
  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: coral;
  }
`;
