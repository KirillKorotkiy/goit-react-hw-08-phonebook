import { LoginForm } from 'components/LoginForm/LoginForm';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { ReactComponent as WelcomeLogo } from 'icons/doormat-svgrepo-com.svg';

 const HomePage = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      <div className="wrapper">
        <h1 className="welcome">
          Welcome to <br />
          <p className="phonebook">
            {' '}
            the Phonebook{' '}
            {loggedIn && <span className="name"> {userName}</span>}{' '}
          </p>
        </h1>
        {!loggedIn ? <LoginForm /> : <WelcomeLogo width="400" />}
      </div>
    </>
  );
};

export default HomePage