import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ListadoDeProductosContainer from "./Test/ListadoDeProductosContainer";
// import "../src/style-sheets/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListadoDeProductosContainer />
      <Footer />
    </div>
  );
}

export default App;
