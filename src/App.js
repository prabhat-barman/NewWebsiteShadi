import "./App.css";
import CarouselShrishti from "./components/CarouselShrishti";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import CarouselGunjan from "./components/CarouselGunjan";

function App() {
  return (
    <>
      <nav className="">
        <NavBar />
      </nav>
      <div className="">
        <SideMenu />
      </div>
      <CarouselShrishti />
    </>
  );
}

export default App;
