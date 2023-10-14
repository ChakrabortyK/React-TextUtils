// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#565656";
    }
  };

  return (
    <>
      <Navbar
        title="textUtils2"
        about="textUtils About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <About /> */}
      <div className="container my-3">
        <TextForm heading="Enter Text to transform" mode={mode} />
      </div>
    </>
  );
}

export default App;
