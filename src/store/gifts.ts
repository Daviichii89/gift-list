//@ts-nocheck
//@ts-ignore
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import { Gifts } from "../types";

interface State {
    gifts: Gifts[]
    fetchGifts: () => Promise<void>
    reserveGift: (giftId: number) => void
}

const API_URL = import.meta.env.PROD ? 'https://listado-regalos-fanny.surge.sh/' : 'http://localhost:5173';

export const useGiftsStore = create<State>()(devtools(persist((set, get) => {
    return {
        loading: false,
        gifts: [],
        fetchGifts: async () => {
            const res = await fetch(`${API_URL}/data.json`);
            const gifts = await res.json()
            set({ gifts }, false, 'FETCH_GIFTS')
        },
        reserveGift: (giftId) => {
            const {gifts} = get()
            const newGifts = structuredClone(gifts)
            const giftIndex = newGifts.findIndex(newGift => newGift.id === giftId)
            const giftInfo = newGifts[giftIndex]
            console.log(giftInfo)
            newGifts[giftIndex] = {
                ...giftInfo,
                reserved: true
            }
            set({ gifts: newGifts}, false, 'RESERVE_GIFT')
        }
    }
}, {
    name: 'gifts'
})))