import { useState } from "react"
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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const gifts = useGiftsStore(state => state.gifts) as Gifts[] | null;
    const reserveGift = useGiftsStore(state => state.reserveGift);
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    setTimeout(() => {
        setIsLoading(false)
    }, 500);
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
                isLoading ?
                    <section className="flex flex-col items-center justify-center min-h-screen absolute inset-0">
                        <p className="mx-auto max-w-md sm:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl p-2 text-center text-4xl">Cargando lista...</p>
                        <div role="status" className="mt-4">
                            <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </section>
                :
                    gifts && gifts.length > 0 
                    ? 
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
                                        reserveGift(gift.id, user.uid)
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