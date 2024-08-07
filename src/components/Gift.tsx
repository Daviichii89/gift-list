import { useEffect, useState } from "react"
import { useGiftsStore } from "../store/gifts"

import Modal from 'react-modal'
import confetti from "canvas-confetti"
import { Gifts } from "../types"
import { useAuth } from "../hook/useAuth"

Modal.setAppElement('#root')
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '100%',
        transform: 'translate(-50%, 50%)',
        borderRadius: '10px'
    },
};

const Gift = () => {
    const { user } = useAuth();
    const giftsFromStore = useGiftsStore(state => state.gifts) as Gifts[] | null;
    const [gifts, setGifts] = useState<Gifts[] | null>(giftsFromStore);
    const reserveGift = useGiftsStore(state => state.reserveGift);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!giftsFromStore) {
            fetch("data.json")
                .then(response => response.json())
                .then(data => {
                    setGifts(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [giftsFromStore]);
    const openModal = () => {
        setIsModalOpen(true)
        confetti()
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <>
            {
                gifts ? 
                    gifts.map(gift => (
                        <section key={gift.id} className="mx-auto max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl border border-slate-800 dark:border-white p-2">
                            <header className="border p-2 mb-2 bg-slate-800 dark:bg-slate-100">
                                <p className="text-center font-bold text-white dark:text-red-900">{gift.title}</p>
                            </header>
                            <main>
                                <div className="flex md:items-center md:justify-center">
                                    <picture className="mr-2 flex justify-center items-center">
                                        <img src={gift.image} alt={gift.title} className="min-w-[120px] max-w-[120px] md:min-w-[100px] md:max-w-[100px]" />
                                    </picture>
                                    <div className="text-left">
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
                                <a href={gift.buy_url}><button className='bg-slate-800 dark:bg-white hover:bg-slate-500 w-28 h-8 rounded-full text-white dark:text-black'>Visitar</button></a>
                                <button onClick={() => {
                                    // reserveGift(gift.id, uid)
                                    reserveGift(gift.id)
                                    openModal()
                                    setTimeout(() => {
                                        closeModal()
                                    }, 4000)
                                }} className={`${gift.reserved === false ? 'bg-blue-500 hover:bg-blue-300' : 'bg-red-400'} w-28 h-8 rounded-full text-white`} disabled={gift.reserved === true}
                                >
                                    {gift.reserved === false ? 'Reservar' : 'Reservado'}
                                </button>
                            </footer>
                        </section>
                    ))
                : 
                    <p className="mx-auto max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl p-2 text-center text-4xl">La lista esta vacía.</p>
            }
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Mensaje de Reserva"
                style={customStyles}
            >
                <header className="flex flex-col justify-center items-center mb-4">
                    <img 
                        src={user.photoURL}
                        alt={user.displayName}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <p>
                        ¡Muchas gracias, {user.displayName}!
                    </p>
                </header>
                <main className="mb-10">
                    <h2 className="text-lg text-center font-bold">Se ha reservado el regalo con éxito.</h2>
                </main>
                <footer className="flex justify-center items-center">
                    <button
                        onClick={closeModal}
                        className="bg-blue-500 hover:bg-blue-300 w-28 h-8 rounded-full text-white"
                    >
                        Cerrar
                    </button>
                </footer>
            </Modal>
        </>
    )
}

export default Gift