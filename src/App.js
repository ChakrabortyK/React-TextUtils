// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

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
      document.title = "TextUtil - Light";
      // setTimeout(() => {
      //   showAlert("", "", "");
      // }, 1000);
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#565656";
      showAlert("Dark Mode Set", "LIGHTS OFF  ", "danger");
      document.title = "TextUtil - Dark";
      // setTimeout(() => {
      //   showAlert("", "", "");
      // }, 1000);
    }
  };

  return (
    <>
      <Navbar
        title="textUtils2"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes basename="/React-TextUtils">
        <Route
          exact
          path="/"
          element={
            <>
              <Alert alert={alert} />

              <div className="container my-3">
                <TextForm
                  heading="Enter Text to transform"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
