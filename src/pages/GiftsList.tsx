import { useEffect } from "react";


import Gift from "../components/Gift";

import useFirestore from "../hook/useFirestore";
import { useAuth } from "../hook/useAuth";
import { useGiftsStore } from "../store/gifts";

const GiftsList = () => {
  
  const { user } = useAuth();
  const { data } = useFirestore()
  const fetchGifts = useGiftsStore((state) => state.fetchGifts);
  
  // useEffect(() => {getData()},[getData])
  useEffect(() => {
    fetchGifts();
  }, [data, fetchGifts]);
  return (
    <main className="p-4">
      <section>
        <Gift user={user} />
      </section>
    </main>
  );
};

export default GiftsList;
