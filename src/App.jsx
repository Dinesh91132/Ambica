import { useState } from 'react'
import './App.css'
import AmbicaFoundation from './Components/AmbicaFoundation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AmbicaFoundation />
    </>
  )
}

export default App;
