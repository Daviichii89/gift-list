/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
//@ts-nocheck
import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Introduce un correo válido.");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener mínimo 6 carácteres");
      } else if (error.code === "auth/email-already-inuse") {
        setError("Ya existe una cuenta con este correo.");
      }
    }
  };
  const handleGoogleSignin = async () => {
    await loginWithGoogle()
    navigate("/")
  }
  return (
    <div className="mt-20">
      {error && (
        <p className="text-white bg-red-300 border p-2 mt-2">{error}</p>
      )}
      <section className="min-h-full flex justify-center items-center">
        {/* <form
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <label htmlFor="email" className="text-red-900 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@example.com"
            className="w-50 h-10 rounded p-2"
            onChange={handleChange}
          />
          <label htmlFor="password" className="text-red-900 font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="w-50 h-10 rounded p-2"
            onChange={handleChange}
          />
          <footer className="flex">
            <Link to='/signup'>
              <button className="border my-4 mr-2 bg-blue-600 p-2 w-24 rounded-full text-white hover:bg-blue-300">
                Registrarse
              </button>
            </Link>
            <button className="border my-4 bg-blue-600 p-2 w-24 rounded-full text-white hover:bg-blue-300">
              Acceder
            </button>
          </footer>
        </form> */}
        <button onClick={handleGoogleSignin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Iniciar sesión con Google
        </button>
      </section>
    </div>
  );
};

export default Login;
