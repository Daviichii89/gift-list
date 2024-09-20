//@ts-nocheck
//@ts-ignore
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import { Gifts } from "../types";
import useFirestore from '../hook/useFirestore';
import { db } from '../firebase';
import { collection, doc, setDoc } from "firebase/firestore"

interface State {
    gifts: Gifts[]
    fetchGifts: ([]) => Promise<void>
    reserveGift: (giftId: number, uid: string) => void
}

export const useGiftsStore = create<State>()(devtools((set, get) => {
    return {
        loading: false,
        gifts: [],
        fetchGifts: (data) => {
            const gifts = data
            set( { gifts } , false, 'FETCH_GIFTS')
        },
        reserveGift: (giftId, uid) => {
            const { gifts } = get()
            const newGifts = structuredClone(gifts)
            const giftIndex = newGifts.findIndex(newGift => newGift.id === giftId)
            const giftInfo = newGifts[giftIndex]
            newGifts[giftIndex] = {
                ...giftInfo,
                reserved: true
            }
            set({ gifts: newGifts}, false, 'RESERVE_GIFT')
            const giftRef = doc(db, 'gifts',`gift${giftId}`)
            setDoc(giftRef, {...giftInfo, uid:uid ,reserved: true})
                .then(() => {
                    console.log('El regalo se reservó con éxito en Firebase.')
                })
                .catch(error => {
                    console.error('Error al reservar el regalo.')
                })
        }
    }
}))