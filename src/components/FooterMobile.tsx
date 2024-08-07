import WelcomeLogin from "./WelcomeLogin";

const FooterMobile = () => {
  return (
    <footer className="fixed sm:hidden bottom-0 w-full bg-slate-100 text-black dark:bg-gray-800 dark:text-white">
      <WelcomeLogin />
    </footer>
  );
};

export default FooterMobile;