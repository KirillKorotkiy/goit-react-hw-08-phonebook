import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { LogOutButton } from 'components/Logout/LogOut'; 

export const AppBar = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
      <Header>
        <Navigation/>
        {loggedIn && <LogOutButton/>}
      </Header>
  );
};

