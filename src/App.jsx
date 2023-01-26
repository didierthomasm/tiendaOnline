import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {

  return (
  <>
    <NavBar />

    <ItemListContainer greeting={'These are the items'}/>
  </>
  );
}
export default App
