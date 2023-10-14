// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, strong, type) => {
    setAlert({
      msg: message,
      strong: strong,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode Set", "SUNRISE  ", "success");
      // setTimeout(() => {
      //   showAlert("", "", "");
      // }, 1000);
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#565656";
      showAlert("Dark Mode Set", "LIGHTS OFF  ", "danger");
      // setTimeout(() => {
      //   showAlert("", "", "");
      // }, 1000);
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
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter Text to transform"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
