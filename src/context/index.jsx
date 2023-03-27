import { createContext, useState } from "react";

export const Context = createContext();

export function CustomProvider({ children }) {
  const [itemsAddedQuantity, setItemsAddedQuantity] = useState([]);

  const onAdd = () => {
    setItemsAddedQuantity((oldState) => oldState.concat({}));
  };

  const onRemove = () => {
    setItemsAddedQuantity((oldState) => oldState.slice(1));
  };

  const value = {
    itemsAddedQuantity,
    onAdd,
    onRemove,
  };

  return <Context.Provider value={value}> {children}</Context.Provider>;
}

export default CustomProvider;
