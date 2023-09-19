import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-2">Lista de regalos</h1>
      <h3 className="text-xl mb-2">02 de Octubre 2023</h3>
      <CountdownTimer />
      <section className="flex items-center justify-center">
        <img src="/fanny.jpg" alt="Fanny" className="rounded-full w-40" />
      </section>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </header>
  );
};

export default Header;
