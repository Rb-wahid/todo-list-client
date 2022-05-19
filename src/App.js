import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SocialSignin from "./components/SocialSignin";
import Signin from "./components/SocialSignin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SocialSignin />} />
      </Routes>
    </>
  );
}

export default App;
