// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="textUtils2" about="textUtils About" />
      <div className="container my-3">
        <TextForm heading="Enter Text to transform" />
      </div>
    </>
  );
}

export default App;
