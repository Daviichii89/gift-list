//@ts-nocheck
//@ts-ignore
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import { Gifts } from "../types";
import useFirestore from '../hook/useFirestore';

interface State {
    gifts: Gifts[]
    fetchGifts: () => Promise<void>
    reserveGift: (giftId: number) => void
}

export const useGiftsStore = create<State>()(devtools(persist((set, get) => {
    return {
        loading: false,
        gifts: [],
        fetchGifts: (data) => {            
            console.log(data)
            const gifts = data
            console.log(gifts)
            set( { gifts } , false, 'FETCH_GIFTS')
        },
        reserveGift: (giftId) => {
            console.log(giftId)
            const { gifts } = get()
            console.log(gifts)
            const newGifts = structuredClone(gifts)
            const giftIndex = newGifts.findIndex(newGift => newGift.id === giftId)
            const giftInfo = newGifts[giftIndex]
            console.log(giftInfo)
            newGifts[giftIndex] = {
                ...giftInfo,
                reserved: true
            }
            console.log(newGifts[giftIndex])
            set({ gifts: newGifts}, false, 'RESERVE_GIFT')
        }
    }
}, {
    name: 'gifts'
})))