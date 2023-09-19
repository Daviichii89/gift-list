import { Routes, Route } from "react-router-dom";
import "./App.css";
import GiftsList from "./components/GiftsList";
import Header from "./components/Header";
import Login from "./components/Login";
import AuthProvider from "./context/authContext";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-black">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<GiftsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
