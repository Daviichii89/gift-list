import { useEffect } from 'react';
import { useGiftsStore } from '../store/gifts';
import Gift from './Gift';

const GiftsList = () => {
  const fetchGifts = useGiftsStore (state => state.fetchGifts)
  useEffect(() => {
    fetchGifts();
  }, [fetchGifts])
  return (
    <main className='p-2'>
      <Gift />  
    </main>
  )
}

export default GiftsList;