import "./App.css";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <nav className="">
        <NavBar />
      </nav>
      <div className="">
        <SideMenu />
      </div>
    </>
  );
}

export default App;
