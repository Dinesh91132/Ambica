import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Table from './Pages/Table'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      
<About/>
<Table/>  




       
    </>
  )
}

export default App
