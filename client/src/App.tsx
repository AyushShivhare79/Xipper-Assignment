import { Route, Routes } from "react-router";
import "./App.css";
import Signin from "./pages/Auth/Signin";
import Page from "./pages/Home/Page";
import Signup from "./pages/Auth/Signup";
import AuthRoute from "./AuthRoute";
import CheckIn from "./pages/CheckIn/CheckIn";

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
          path="/checkin"
          element={
            <AuthRoute isProtected>
              <CheckIn />
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
