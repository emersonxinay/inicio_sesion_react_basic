
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Bienvenido from './components/Bienvenida'
function App() {
  const [user, setUser] = useState([])

  return (
    <>
      {
        user.length === 0
          ? <Login setUser={setUser} />
          : <Bienvenido user={user} setUser={setUser} />

      }

    </>
  )
}

export default App
