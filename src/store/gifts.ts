import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import { Gifts } from "../types";


interface State {
    gifts: Gifts[]
    fetchGifts: () => Promise<void>
}

const API_URL = import.meta.env.PROD ? 'https://listado-regalos-fanny.surge.sh/' : 'http://localhost:5173';

export const useGiftsStore = create<State>()(devtools(persist((set) => {
    return {
        gifts: [],
        fetchGifts: async () => {
            const res = await fetch(`${API_URL}/data.json`);
            const gifts = await res.json()
            set({ gifts }, false, 'FETCH_GIFTS')
        }
    }
}, {
    name: 'gifts'
})))