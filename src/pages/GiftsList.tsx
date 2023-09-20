//@ts-nocheck
import { useEffect } from "react";
import { useGiftsStore } from "../store/gifts";
import Gift from "../components/Gift";
import { useAuth } from "../hook/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const GiftsList = () => {
  const fetchGifts = useGiftsStore((state) => state.fetchGifts);
  const { user } = useAuth();
  const handleLogout = async () => {
    if (user) {
      signOut(auth)
    }
  };
  useEffect(() => {
    fetchGifts();
  }, [fetchGifts]);
  return (
    <main className="p-2 text-white">
      <section className="flex justify-center items-center m-4">
        {user ? <img src={user.photoURL} alt={user.displayName} className="w-16 rounded-full border-2 border-red-900" /> : null}
        <div className="p-2 flex flex-col justify-center items-center">
          <p>{user ? `Bienvenido/a, ${user.displayName}` : ("Cargando...")} </p>
          {user ? <button className="flex bg-white text-black p-1 rounded text-sm" onClick={handleLogout}><svg height="20" viewBox="0 0 24 24" width="24" focusable="false" className="bg-white"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>Cerrar sesión</button> : ""}
        </div>
      </section>
      <Gift />
    </main>
  );
};

export default GiftsList;
