// @ts-nocheck
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useFirestore = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
        console.log('getData', data)
    }, [])

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
            setLoading(false)
        }
    }

    return {
        data, error, loading
    }
}

export default useFirestore;