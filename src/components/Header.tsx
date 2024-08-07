import CountdownTimer from "./CountdownTimer";
import { DarkLightModeButton } from "./DarkLightModeButton";

const Header = () => {

  return (
    <header className="flex flex-col items-center justify-center">
      <DarkLightModeButton />
      <h1 className="text-3xl font-bold mt-6 mb-2">Lista de regalos</h1>
      <h3 className="text-xl mb-2">02 de Octubre 2024</h3>
      <CountdownTimer />
      <section className="flex items-center justify-center">
        <img src="/fanny.jpg" alt="Fanny" width={128} height={128} className="rounded-full" />
      </section>
    </header>
  );
};

export default Header;