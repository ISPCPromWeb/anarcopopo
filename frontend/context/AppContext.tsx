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
  type: string;
  theme: string;
  isLoading: boolean;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: AppContextType = {
  type: "common",
  theme: "dark",
  isLoading: false,
  setType: () => {},
  setTheme: () => {},
  setIsLoading: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [type, setType] = useState<string>("common");
  const [theme, setTheme] = useState<string>("dark");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  const contextValue = useMemo(
    () => ({
      type,
      theme,
      isLoading,
      setType,
      setTheme,
      setIsLoading,
    }),
    [isLoading, theme, type]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
