import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";

const Producto = {
  id: 10,
  categoria: "Zapatilla",
  marca: "Nike",
  modelo: "Air Huarache",
  precio: 15000,
  imagen:
    "https://celadasa.vtexassets.com/arquivos/ids/212097-800-auto?v=637927959037630000&width=800&height=auto&aspect=true",
};

export default function Body_Test() {
  return (
    //Tarjeta de producto----------------------------------
    <Card m={4} sx={{ maxWidth: 250 }}>
      <CardHeader
        title={Producto.categoria + " " + Producto.marca}
      ></CardHeader>
      <CardMedia
        component="img"
        height="140"
        image={Producto.imagen}
        alt="ZAPATILLAS NIKE AIR HUARACHE"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Modelo: {Producto.modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${Producto.precio}
        </Typography>
        <CardActions>
          <Button href="https://google.com" size="medium" variant="contained">
            ir a producto
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
