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

export const useGiftsStore = create<State>()(devtools((set, get) => {
    return {
        loading: false,
        gifts: [],
        fetchGifts: (data) => {
            const gifts = data
            set( { gifts } , false, 'FETCH_GIFTS')
        },
        reserveGift: (giftId) => {
            const { gifts } = get()
            const newGifts = structuredClone(gifts)
            const giftIndex = newGifts.findIndex(newGift => newGift.id === giftId)
            const giftInfo = newGifts[giftIndex]
            newGifts[giftIndex] = {
                ...giftInfo,
                reserved: true
            }
            set({ gifts: newGifts}, false, 'RESERVE_GIFT')
        }
    }
}))