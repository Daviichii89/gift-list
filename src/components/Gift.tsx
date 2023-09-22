// @ts-nocheck
import useFirestore from "../hook/useFirestore"
import { useGiftsStore } from "../store/gifts"

const Gift = () => {
    const gifts = useGiftsStore(state => state.gifts)
    const reserveGift = useGiftsStore(state => state.reserveGift)

    const handleClick = (gift) => {
        
    }
    return (
        <>
            {
                gifts && gifts.map(gift => (
                    <section key={gift.id} className="border p-2">
                        <header className="border p-2 mb-2 bg-slate-100"><p className="font-bold text-red-900">{gift.title}</p></header>
                        <main>
                            <div className="flex md:items-center md:justify-center">
                                <picture className="mr-2 flex justify-center items-center">
                                    <img src={gift.image} alt={gift.title} className="min-w-[120px] max-w-[120px] md:min-w-[100px] md:max-w-[100px]" />
                                </picture>
                                <div className="text-left text-white">
                                    <p>
                                        <span className="font-bold">Autor: </span>
                                    </p>
                                    {gift.author}
                                    <p>
                                        <span className="font-bold">A la venta: </span>
                                    </p>
                                    {gift.isOnSale ? 'Si': 'No'}
                                    <p>
                                        <span className="font-bold">Fecha lanzamiento: </span>
                                    </p>
                                    {gift.releaseDate}
                                    <p>
                                        <span className="font-bold">Precio: </span>
                                    </p>
                                    {gift.price}
                                    <p>
                                        <span className="font-bold">Reservado: </span>
                                    </p>
                                    {gift.reserved ? 'Si' : 'No'}
                                </div>
                            </div>
                        </main>
                        <footer className="mt-2 p-2 flex justify-between md:items-center md:justify-around">
                            <a href={gift.buy_url}><button className='bg-white hover:bg-slate-500 w-28 h-8 rounded-full text-black'>Visitar</button></a>
                            <button onClick={() => reserveGift(gift.id)} className={`${gift.reserved === false ? 'bg-blue-500 hover:bg-blue-300' : 'bg-red-400'} w-28 h-8 rounded-full text-white`} disabled={gift.reserved === true}>{gift.reserved === false ? 'Reservar' : 'Reservado'}</button>
                        </footer>
                    </section>
                ))
            }
        </>
    )
}

export default Gift