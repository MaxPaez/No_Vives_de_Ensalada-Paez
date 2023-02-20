import React, { eseState, useEffect } from "react";
import ListadoDeProductosLayout from "./ListadoDeProductosLayout";

function ListadoDeProductosContainer() {
  const productosShop = [
    {
      id: 1,
      categoria: "Zapatilla",
      marca: "Nike",
      modelo: "Air Huarache",
      precio: 15000,
      imagen:
        "https://celadasa.vtexassets.com/arquivos/ids/212097-800-auto?v=637927959037630000&width=800&height=auto&aspect=true",
    },
    {
      id: 2,
      categoria: "Zapatilla",
      marca: "Adidas",
      modelo: "Superstar Rich",
      precio: 20000,
      imagen:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/e16b3fc2ae044c679207adf700ec18c9_9366/Zapatillas_Superstar_OT_Tech_Blanco_GW0523_01_standard.jpg",
    },
    {
      id: 3,
      categoria: "Zapatilla",
      marca: "New Balance",
      modelo: "574",
      precio: 16500,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_890388-MLM50703358467_072022-O.jpg",
    },
    {
      id: 4,
      categoria: "Zapatilla",
      marca: "Puma",
      modelo: "Future Rider",
      precio: 18000,
      imagen:
        "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8841ede2/products/PU_372351-27/PU_372351-27-1.JPG",
    },
  ];

  return <ListadoDeProductosLayout productosShop={productosShop} />;
}

export default ListadoDeProductosContainer;
