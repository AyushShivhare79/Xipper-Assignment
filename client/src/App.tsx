import { Route, Routes } from "react-router";
import "./App.css";
import Signin from "./pages/Auth/Signin";
import Page from "./pages/Home/Page";
import Signup from "./pages/Auth/Signup";
import AuthRoute from "./AuthRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute isProtected>
              <Page />
            </AuthRoute>
          }
        />

        <Route
          path="/signin"
          element={
            <AuthRoute>
              <Signin />
            </AuthRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
