//@ts-nocheck
import { signOut } from "firebase/auth";
import { useAuth } from "../hook/useAuth";
import { auth } from "../firebase";

const WelcomeLogin = () => {
    const { user } = useAuth();
    const handleLogout = async () => {
      if (user) {
        signOut(auth)
      }
    };
  return (
    <>
        <div className="h-20 sm:mt-20 flex justify-around items-center">
            {
                user &&
                    <>
                        <picture className="py-2">
                            <img src={user.photoURL} alt={user.displayName} width={48} height={48} className="rounded-full border-2 border-red-900" />
                        </picture>
                        <div className="py-2">
                            <p className="text-lg mr-4">
                                Bienvenido/a,
                            </p>
                            <p>
                                {user.displayName}
                            </p>
                        </div>
                        <button className="flex bg-slate-500 text-white dark:bg-white dark:text-black p-1.5 rounded text-sm" onClick={handleLogout}>
                            <svg
                                height="20"
                                viewBox="0 0 24 24"
                                width="24"
                                focusable="false"
                                className="bg-slate-500 dark:bg-white fill-current"
                            >
                                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </button> 
                    </>
            }
        </div>
    </>
  )
}

export default WelcomeLogin