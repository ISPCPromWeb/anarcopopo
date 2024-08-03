"use client";

import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const defaultContextValue: UserContextType = {
  user: {},
  setUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultContextValue);

export const UserProvider: FC<UserContextProviderProps> = ({ children }) => {
  const parsedUser = {};
  const [user, setUser] = useState<any>(parsedUser);

  useEffect(() => {}, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
