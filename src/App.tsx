import About from "./components/About";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div>
      <div className="p-2 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About/>
      <div className="p-2 md:px-[15%]">
        <Experiences/>
      </div>
    </div >
  );
}
