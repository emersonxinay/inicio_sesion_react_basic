/* eslint-disable react/prop-types */
import { useState } from "react";
// base de datos ficcticio
const users = [
  { username: 'admin', password: '123456' },
  { username: 'user', password: 'abcde' },
  { username: 'guest', password: 'qwerty' }
]

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validarDatos = (x) => {
    x.preventDefault();
    // validar si no ingresa datos 
    if (username === "" || password === "") {
      setError(true);
      setErrorMessage('Por favor ingrese todos los datos');
      return;
    }
    // validar si el usuario y contraseña existen en la base de datos
    const user = users.find((user) =>
      user.username === username && user.password === password
    );
    if (user) {
      setError(false);
      setUser(username)
    }
    else {
      setError(true);
      setErrorMessage('Usuario o contraseña incorrecta');
    }
  };

  return (
    <>
      <h1>Iniciar Sesión</h1>
      <form action="" onSubmit={validarDatos} >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <button type="submit" >Iniciar Sesión</button>
      </form>
      {error && <p> {errorMessage} </p>}

    </>
  )

}


export default Login;