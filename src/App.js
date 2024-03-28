import "./App.css";
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
      <CarouselGunjan/>
    </>
  );
}

export default App;


        