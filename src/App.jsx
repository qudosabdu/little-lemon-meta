import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  )
}

export default App
