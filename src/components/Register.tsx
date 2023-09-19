/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import { useAuth } from "../hook/useAuth";

const Register = () => {
  const [user, setUser] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="youremail@example.com"
        onChange={handleChange}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <button>Registrar</button>
    </form>
  );
};

export default Register;
