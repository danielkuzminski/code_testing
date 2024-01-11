import { useState, useEffect } from "react";
import {db} from '../firebase/config'
import { onSnapshot, collection } from "firebase/firestore";

// c = collection to which we refer
// db = firebase config for database

export const useCollection = (c) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(), id: doc.id})
            })
            setData(results)
        })
        return () => unsub()
    },[c])

    return {data}
}