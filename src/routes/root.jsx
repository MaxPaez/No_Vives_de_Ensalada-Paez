import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  console.log(isCategoryRoute);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Root;
