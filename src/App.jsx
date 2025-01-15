import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Footer />
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
