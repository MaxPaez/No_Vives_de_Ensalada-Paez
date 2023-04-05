import { createContext, useState } from "react";

export const Context = createContext();

export function CustomProvider({ children }) {
  const [productsAdded, setProductsAdded] = useState([]);

  function onAdd(product, quantity) {
    const isReadyAdded = isInCart(product);

    if (isReadyAdded) {
      const productToModify = productsAdded.find(
        (productsAdded) => productsAdded.id === product.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setProductsAdded((prevState) =>
        prevState.map((productsAdded) =>
          productsAdded.id === product.id ? productModified : productsAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ ...product, quantity })
      );
    }
  }

  const getQuantity = () => {
    let cant = 0;
    productsAdded.forEach((e) => (cant += e.quantity));
    return cant;
  };

  function removeItem(itemId) {
    const newProductsAdded = [...productsAdded];
    const index = newProductsAdded.findIndex(
      (product) => product.id === itemId
    );
    newProductsAdded.splice(index, 1);
    setProductsAdded(newProductsAdded);
  }

  function clear() {
    setProductsAdded([]);
  }

  function isInCart(product) {
    return productsAdded.some(
      (productsAdded) => productsAdded.id === product.id
    );
  }

  return (
    <Context.Provider
      value={{ productsAdded, onAdd, clear, getQuantity, removeItem }}
    >
      {children}
    </Context.Provider>
  );
}

export default CustomProvider;
