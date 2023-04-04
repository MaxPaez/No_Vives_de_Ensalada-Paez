import { createContext, useState } from "react";

export const Context = createContext();

export function CustomProvider({ children }) {
  const [productsAdded, setProductsAdded] = useState([]);

  function onAdd(product, quantity) {
    setProductsAdded((prevState) => prevState.concat(product));
  }

  return (
    <Context.Provider value={(productsAdded, onAdd)}>
      {children}
    </Context.Provider>
  );
}

export default CustomProvider;
