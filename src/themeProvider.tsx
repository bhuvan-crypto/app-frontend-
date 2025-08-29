import { createContext, useReducer, ReactNode, Dispatch } from "react";

type ThemeState = { darkMode: boolean };
type ThemeAction = { type: "LIGHTMODE" | "DARKMODE" };
type ThemeContextType = {
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType>({
  state: { darkMode: true },
  dispatch: () => {},
});
const initialState: ThemeState = { darkMode: false };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

type ThemeProviderProps = { children: ReactNode };

export function ThemeProvider(props: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state, dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
