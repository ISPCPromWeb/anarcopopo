"use client";

import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface AppContextProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  theme: string;
  isLoading: boolean;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: AppContextType = {
  theme: "dark",
  isLoading: false,
  setTheme: () => {},
  setIsLoading: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  const contextValue = useMemo(
    () => ({
      theme,
      isLoading,
      setTheme,
      setIsLoading,
    }),
    [isLoading, theme]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
