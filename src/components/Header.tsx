import { Link } from "react-router-dom"
import CountdownTimer from "./CountdownTimer"
import { useAuth } from "../hook/useAuth"

const Header = () => {
  const { user } = useAuth()
  console.log({ user })
  return (
    <header className="flex flex-col items-center justify-center">
        <h1 className='text-3xl text-white font-bold mb-2'>
            Lista de regalos
        </h1>
        <h3 className="text-xl text-white mb-2">02 de Octubre 2023</h3>
        <CountdownTimer />
        <section className="flex items-center justify-center">
          <img src="/fanny.jpg" alt="Fanny" className="rounded-full w-40" />
        </section>
        Bienvenido/a, 
        <Link to='/login'><button className="text-white">Login</button></Link>
    </header>
  )
}

export default Header