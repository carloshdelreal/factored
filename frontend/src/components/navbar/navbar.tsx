import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthActionTypes, AuthContext } from '../../utils/AuthContext';

export const Navbar = () => {
  const { dispatchAuthInfo } = useContext(AuthContext);

  const logout = () => {
    dispatchAuthInfo({
      type: AuthActionTypes.logout,
    });
  };
  return (
    <nav>
      <ul>
        <li>
          <Button onClick={logout}>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};
