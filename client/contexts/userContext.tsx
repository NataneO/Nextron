import { createContext } from 'react';

type UserContextType = {
  user: any;
  message: string | null;
  isFetching: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  message: null,
  isFetching: false,
});

export default UserContext;