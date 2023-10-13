// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="textUtils2" about="textUtils About" />
      <About />
      <div className="container my-3">
        <TextForm heading="Enter Text to transform" />
      </div>
    </>
  );
}

export default App;
