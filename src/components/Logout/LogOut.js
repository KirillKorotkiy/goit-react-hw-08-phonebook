import { clearState } from 'redux/auth/authSlice';
import { useLogOutUserMutation } from 'redux/auth/authQueryAPI';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logout } from '../../icons/logout.svg';

export const LogOutButton = () => {
  const dispatch = useDispatch();
  const [sendLogOut] = useLogOutUserMutation();

  const logOut = async () => {
    try {
      await sendLogOut();
      dispatch(clearState());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="log-out" onClick={() => logOut()}>
      <Logout width="80" />
      Log out
    </button>
  );
};
