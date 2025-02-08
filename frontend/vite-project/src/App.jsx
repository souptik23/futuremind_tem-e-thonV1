import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LandingPage} from './component/pages/LandingPage'
import './App.css'
import Navbar from './component/Navbar'
import HomePage from './component/pages/HomePage'
import ProfilePage from './component/pages/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <LandingPage />
     {/* <HomePage /> */}
     {/* <ProfilePage /> */}
    </>
  )
}

export default App
