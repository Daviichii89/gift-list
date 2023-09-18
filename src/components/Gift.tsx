import { useGiftsStore } from "../store/gifts"

const Gift = () => {
    const gifts = useGiftsStore(state => state.gifts)
    return (
        <>
            {
                gifts && gifts.map(gift => (
                    <section key={gift.id} className="border p-2">
                        <header className="border p-2 mb-2"><p className="font-bold text-white">{gift.title}</p></header>
                        <main>
                            <div className="flex">
                                <picture className="mr-2 flex justify-center items-center">
                                    <img src={gift.image} alt={gift.title} className="min-w-[80px] max-w-[80px]" />
                                </picture>
                                <div className="text-left text-white">
                                    <p>
                                        <span className="font-bold">Autor: </span>{gift.author}
                                    </p>
                                    <p>
                                        <span className="font-bold">A la venta: </span>{gift.isOnSale ? 'Si': 'No'}
                                    </p>
                                    <p>
                                        <span className="font-bold">Fecha lanzamiento: </span>{gift.releaseDate}
                                    </p>
                                    <p>
                                        <span className="font-bold">Libre: </span>{gift.freeToChoose ? 'Si' : 'No'}
                                    </p>
                                </div>
                            </div>
                        </main>
                        <footer className="mt-2 p-2">
                            <a href={gift.buy_url}><button className={`${gift.freeToChoose ? 'bg-blue-500' : 'bg-red-400'} w-28 h-8 rounded-full text-white`} disabled={!gift.freeToChoose}>{gift.freeToChoose ? 'Visitar' : 'Reservado'}</button></a>
                        </footer>
                    </section>
                ))
            }
        </>
    )
}

export default Gift