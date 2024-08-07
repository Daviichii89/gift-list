// @ts-nocheck
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useGiftsStore } from "../store/gifts";

const useFirestore = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
  
    const getData = async () => {
        if (loading) return
        try {
            setLoading(true)
            const querySnapshot = await getDocs(collection(db, "gifts"))
            const dataDB = querySnapshot.docs.map(doc => doc.data())
            dataDB.sort((a,b) => a.id - b.id)
            setData(dataDB)
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    const reservedGift = async (gift) => {
        console.log(gift)
        try {
            setLoading(true)
            const newDoc = {
                ...gift,
                reserved: true
            }
            console.log(newDoc)
            const docRef = doc(db, "gifts", newDoc.id)
            await setDoc(docRef, newDoc)
            setData([
                ...data,
                newDoc
            ])
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    return {
        data, error, loading, getData, reservedGift
    }
}

export default useFirestore;