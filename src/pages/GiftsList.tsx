//@ts-nocheck
import { useEffect } from "react";
import { useGiftsStore } from "../store/gifts";
import Gift from "../components/Gift";
import { useAuth } from "../hook/useAuth";

const GiftsList = () => {
  const fetchGifts = useGiftsStore((state) => state.fetchGifts);
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout;
    } catch (error) {
      console.error(error.nessage);
    }
  };
  useEffect(() => {
    fetchGifts();
  }, [fetchGifts]);
  return (
    <main className="p-2 text-white">
      <p>{user ? `Bienvenido/a, ${user.email}` : "Cargando..."} </p>
      {user ? <button onClick={handleLogout}>Cerrar sesión</button> : ""}
      <Gift />
    </main>
  );
};

export default GiftsList;
