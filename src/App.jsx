import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Services from './Pages/Services' 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

import Sports from './Pages/Sports'

import { Routes,Route} from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Services/>
    <Routes>
        
      <Route path="/sports" element={<Sports />} />
    </Routes> 

    </div>
  
  
  
    
  );
}

export default App;
