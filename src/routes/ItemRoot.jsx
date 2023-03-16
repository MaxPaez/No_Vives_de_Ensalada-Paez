import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const params = useParams();
  const itemRoute = params.id;

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer itemRoute={itemRoute} itemId={params.id} />
    </div>
  );
}

export default ItemRoot;
