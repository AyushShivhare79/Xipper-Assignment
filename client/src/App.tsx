import { Route, Routes } from "react-router";
import "./App.css";
import Signin from "./pages/auth/Signin";
import Page from "./pages/Home/Page";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
