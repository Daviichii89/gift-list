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
  const { login } = useAuth();
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
  return (
    <div className="mt-2">
      {error && (
        <p className="text-white bg-red-300 border p-2 mt-2">{error}</p>
      )}
      <section className="bg-slate-300 min-h-[500px] flex justify-center items-center">
        <form
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
        </form>
      </section>
    </div>
  );
};

export default Login;
