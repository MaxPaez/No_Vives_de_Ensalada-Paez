import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div className="App">
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
