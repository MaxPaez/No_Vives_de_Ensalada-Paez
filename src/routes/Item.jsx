import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const params = useParams();
  const isDetailRoute = params.id;

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer isDetailRoute={isDetailRoute} datailId={params.id} />
    </div>
  );
}

export default ItemRoot;
