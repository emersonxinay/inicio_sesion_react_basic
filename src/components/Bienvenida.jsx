/* eslint-disable react/prop-types */
function Bienvenido({ user, setUser }) {
  const cerrarSesion = () => {
    setUser([])
  }
  return (
    <>
      <h1>Hola bienvenido</h1>
      <h1> {user} </h1>
      <button onClick={cerrarSesion} >cerrar sessión</button>
    </>
  )
}
export default Bienvenido;