import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
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
      <section className="bg-slate-500">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@example.com"
            className="w-40 rounded"
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="w-40 rounded"
            onChange={handleChange}
          />
          <button className="border my-4 bg-blue-600 p-2 w-20 rounded-full text-white hover:bg-blue-300">
            Registrar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
