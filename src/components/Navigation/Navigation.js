import { LinkNav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <LinkNav className="color" to="/">
        Home
      </LinkNav>
      {loggedIn && (
        <LinkNav className="color" to="/contacts">
          Contacts
        </LinkNav>
      )}
      {!loggedIn && (
        <LinkNav className="color" to="/register">
          Registred
        </LinkNav>
      )}
    </div>
  );
};
