import { Routes, Route } from "react-router-dom";
import "./App.css";
import GiftsList from "./components/GiftsList";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <div className="bg-black">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<GiftsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
