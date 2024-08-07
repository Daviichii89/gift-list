import { Routes, Route } from "react-router-dom";
import GiftsList from "./pages/GiftsList";
import Header from "./components/Header";
import Login from "./pages/Login";
import AuthProvider from "./context/authContext";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./pages/NotFound";
import FooterMobile from "./components/FooterMobile";

function App() {
  return (
    <div className="bg-slate-100 text-black dark:bg-gray-800 dark:text-white min-h-screen relative pb-16 md:pb-0">
      <AuthProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <GiftsList />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterMobile />
      </AuthProvider>
    </div>
  );
}

export default App;
