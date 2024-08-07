// @ts-nocheck
import { useState } from "react"
import useFirestore from "../hook/useFirestore"
import { useGiftsStore } from "../store/gifts"

import Modal from 'react-modal'
import confetti from "canvas-confetti"

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

const Gift = (user) => {
    const gifts = useGiftsStore(state => state.gifts)
    const reserveGift = useGiftsStore(state => state.reserveGift)
    const { uid } = user.user
    const [isModalOpen, setIsModalOpen] = useState(false)
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
                gifts && gifts.map(gift => (
                    <section key={gift.id} className="border p-2">
                        <header className="border p-2 mb-2 bg-slate-100"><p className="font-bold text-red-900">{gift.title}</p></header>
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
                            <a href={gift.buy_url}><button className='bg-white hover:bg-slate-500 w-28 h-8 rounded-full text-black'>Visitar</button></a>
                            <button onClick={() => {
                                reserveGift(gift.id, uid)
                                openModal()
                                setTimeout(() => {
                                    closeModal()
                                }, "4000")
                            }} className={`${gift.reserved === false ? 'bg-blue-500 hover:bg-blue-300' : 'bg-red-400'} w-28 h-8 rounded-full text-white`} disabled={gift.reserved === true}
                            >
                                {gift.reserved === false ? 'Reservar' : 'Reservado'}
                            </button>
                        </footer>
                    </section>
                ))
            }
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Mensaje de Reserva"
                style={customStyles}
            >
                <header className="flex flex-col justify-center items-center mb-4">
                    <img 
                        src={user.user.photoURL}
                        alt={user.user.displayName}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <p>
                        ¡Muchas gracias, {user.user.displayName}!
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