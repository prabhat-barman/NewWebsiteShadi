import "./App.css";
import CarouselShrishti from "./components/CarouselShrishti";
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
      <div><CarouselShrishti/></div>
    </>
  );
}

export default App;
