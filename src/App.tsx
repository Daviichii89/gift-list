import { Routes, Route } from "react-router-dom";
import GiftsList from "./pages/GiftsList";
import Header from "./components/Header";
import Login from "./pages/Login";
import AuthProvider from "./context/authContext";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="bg-black min-h-screen">
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
