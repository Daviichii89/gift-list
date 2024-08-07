import { useEffect, useState } from "react";
import WelcomeLogin from "./WelcomeLogin";
import CountdownTimer from "../components/CountdownTimer";
import { DarkLightModeButton } from "../components/DarkLightModeButton";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-slate-100 dark:bg-slate-800 ");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-slate-100/40 dark:bg-slate-800/40");
      } else {
        setBgColor("bg-slate-100 dark:bg-slate-800");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="mx-auto bg-slate-100 text-black dark:bg-gray-800 dark:text-white">
      <section className={`${bgColor} fixed flex items-center justify-center p-2 top-0 w-full`}>
        <h1 className="text-3xl font-bold my-4">Lista de regalos</h1>
        <DarkLightModeButton />
      </section>
      <section className="hidden sm:block mx-auto sm:max-w-2xl lg:max-w-4xl">
        <WelcomeLogin />
      </section>
      <section className="flex flex-col items-center justify-center mt-4 mb-4">
        <h3 className="text-xl pt-16 sm:pt-6 mb-2">02 de Octubre 2024</h3>
        <CountdownTimer />
        <section className="flex items-center justify-center">
          <img src="/fanny.jpg" alt="Fanny" width={128} height={128} className="rounded-full" />
        </section>
      </section>
    </header>
  );
};

export default Header;