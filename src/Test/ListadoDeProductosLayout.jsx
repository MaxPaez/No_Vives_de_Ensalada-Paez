import React, { eseState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";
import "../style-sheets/Testimonios.css";

function ListadoDeProductosLayout({ productosShop }) {
  return (
    <div className="contTarjetas">
      {productosShop.map((producto) => (
        <div key={producto.id}>
          <Card className="tarjeta" m={4} sx={{ maxWidth: 250 }}>
            <CardHeader
              title={producto.categoria + " " + producto.marca}
            ></CardHeader>
            <CardMedia
              component="img"
              height="140"
              image={producto.imagen}
              alt="ZAPATILLAS NIKE AIR HUARACHE"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Modelo: {producto.modelo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: ${producto.precio}
              </Typography>
              <CardActions>
                <Button
                  href="https://google.com"
                  size="medium"
                  variant="contained"
                >
                  ir a producto
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ListadoDeProductosLayout;
