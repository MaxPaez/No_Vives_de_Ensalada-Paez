import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import { CustomProvider } from "./context";
import Cart from "./routes/cart";
import ItemRoot from "./routes/ItemRoot.jsx";
import Root from "./routes/root";
import Layout from "./components/Layout";
import ErrorPage from "./routes/error-page";

//Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCO_8sgj2476pgbXZQaUULkO5yZ8S8wUO8",
  authDomain: "no-vives-de-ensalada.firebaseapp.com",
  projectId: "no-vives-de-ensalada",
  storageBucket: "no-vives-de-ensalada.appspot.com",
  messagingSenderId: "1077947294736",
  appId: "1:1077947294736:web:ef85cb1d02189763225695",
  measurementId: "G-SZHTZ5HB8H",
};
initializeApp(firebaseConfig);

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/checkout",
      //   element: <div>Hello world!</div>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
