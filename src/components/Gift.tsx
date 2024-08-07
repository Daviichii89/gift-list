import { useState } from "react"
import { useGiftsStore } from "../store/gifts"

import Modal from 'react-modal'
import confetti from "canvas-confetti"
import { Gifts, User } from "../types"

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

const Gift = (user: User) => {
    // const gifts = useGiftsStore(state => state.gifts)
    const gifts: Gifts[] = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            image: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/great-gatsby",
            isOnSale: true,
            releaseDate: "2024-01-01",
            stock: true,
            price: "$10.99",
            reserved: false
          },
          {
            id: 2,
            title: "1984",
            author: "George Orwell",
            image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/1984",
            isOnSale: false,
            releaseDate: "2023-05-20",
            stock: true,
            price: "$8.99",
            reserved: true
          },
          {
            id: 3,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/to-kill-a-mockingbird",
            isOnSale: true,
            releaseDate: "2024-07-11",
            stock: false,
            price: "$12.50",
            reserved: false
          },
          {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            image: "https://m.media-amazon.com/images/I/5176rSnUxfL.jpg",
            buy_url: "https://example.com/pride-and-prejudice",
            isOnSale: true,
            releaseDate: "2023-11-15",
            stock: true,
            price: "$9.99",
            reserved: true
          },
          {
            id: 5,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            image: "https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/catcher-in-the-rye",
            isOnSale: false,
            releaseDate: "2024-03-22",
            stock: true,
            price: "$11.45",
            reserved: false
          },
          {
            id: 6,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            image: "https://m.media-amazon.com/images/I/71pkc6LjsaL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/the-hobbit",
            isOnSale: true,
            releaseDate: "2023-09-30",
            stock: false,
            price: "$13.99",
            reserved: true
          },
          {
            id: 7,
            title: "Moby Dick",
            author: "Herman Melville",
            image: "https://m.media-amazon.com/images/I/615gYAMDHQL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/moby-dick",
            isOnSale: false,
            releaseDate: "2024-02-14",
            stock: true,
            price: "$14.99",
            reserved: false
          },
          {
            id: 8,
            title: "War and Peace",
            author: "Leo Tolstoy",
            image: "https://m.media-amazon.com/images/I/71wXZB-VtBL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/war-and-peace",
            isOnSale: true,
            releaseDate: "2023-12-01",
            stock: true,
            price: "$19.99",
            reserved: false
          },
          {
            id: 9,
            title: "The Odyssey",
            author: "Homer",
            image: "https://m.media-amazon.com/images/I/71rp7o5oTnL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/the-odyssey",
            isOnSale: false,
            releaseDate: "2024-06-05",
            stock: false,
            price: "$15.00",
            reserved: true
          },
          {
            id: 10,
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            image: "https://m.media-amazon.com/images/I/51h-RSUVvvL._AC_UF894,1000_QL80_.jpg",
            buy_url: "https://example.com/crime-and-punishment",
            isOnSale: true,
            releaseDate: "2023-10-20",
            stock: true,
            price: "$10.50",
            reserved: false
          }
    ]
    const reserveGift = useGiftsStore(state => state.reserveGift)
    // const { uid } = user.user
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
                    <section key={gift.id} className="border border-slate-800 dark:border-white p-2">
                        <header className="border p-2 mb-2 bg-slate-800 dark:bg-slate-100">
                            <p className="font-bold text-red-900">{gift.title}</p>
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