// import ItemListContainer from "./components/ItemListContainer2";
import NavBar from "./components/NavBar";
import ItemListContainer from "./test/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting={"No Vives de Ensaladas"} /> */}
      <ItemListContainer />
    </div>
  );
}

export default App;
