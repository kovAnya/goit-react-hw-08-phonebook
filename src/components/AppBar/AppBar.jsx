import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, Navigation } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = true;
  return (
    <Header>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Navigation>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
