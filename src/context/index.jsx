import { createContext } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
