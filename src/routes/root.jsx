import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

import { useContext } from "react";
import Context from "../context";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  const contextValues = useContext(Context);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
