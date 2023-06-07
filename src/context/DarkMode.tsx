import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const state = useMemo(() => ({
    darkMode,
    setDarkMode,
  }), [darkMode]);

  const colors = {
    black: '#0A0A0A',
    white: '#EDEDED',
  };

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.style.setProperty('--body-background', colors.black);
    } else {
      document.documentElement.style.setProperty('--body-background', colors.white);
    }
  }, [state]);

  return (
    <DarkModeContext.Provider value={state}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode(): DarkModeContextProps {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  const { darkMode, setDarkMode } = context;

  return { darkMode, setDarkMode };
}

export default DarkModeProvider;
