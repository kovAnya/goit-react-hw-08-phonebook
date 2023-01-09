import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header, Navigation, MainLink } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation>
        <MainLink to="/">Home</MainLink>
        {isLoggedIn && <MainLink to="/contacts">Contacts</MainLink>}
      </Navigation>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
