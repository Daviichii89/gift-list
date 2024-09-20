import { useEffect } from 'react';

import Gift from '../components/Gift';

import useFirestore from '../hook/useFirestore';
import { useGiftsStore } from '../store/gifts';

const GiftsList = () => {
    const { data, getData } = useFirestore();
    useEffect(() => {
        getData();
    }, []);
    const fetchGifts = useGiftsStore((state) => state.fetchGifts);
    useEffect(() => {
        fetchGifts(data);
    }, [data]);
    return (
        <main className="p-4">
            <section>
                <Gift />
            </section>
        </main>
    );
};

export default GiftsList;
