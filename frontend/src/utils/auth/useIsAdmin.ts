import { UserType } from '../../types';
import { useIsAuthenticated } from './useIsAuthenticated';

type UseIsAdminHook = () => boolean;

export const useIsAdmin: UseIsAdminHook = () => {
  const { userData } = useIsAuthenticated();
  return userData?.type === UserType.ADMIN;
};
