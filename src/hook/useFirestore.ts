// @ts-nocheck
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useGiftsStore } from "../store/gifts";

const useFirestore = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
  
    const getData = async () => {
        try {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, "gifts"))
            const dataDB = querySnapshot.docs.map(doc => doc.data())
            setData(dataDB)
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }
    }
    useEffect(() => {getData()},[])
    

    return {
        data, error, loading
    }
}

export default useFirestore;