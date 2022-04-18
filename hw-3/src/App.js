import "./App.css";

import HelloPage from "./pages/HelloPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HelloPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
