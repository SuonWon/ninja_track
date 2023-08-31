import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NinjaRoute from './Route/NinJaRoute'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <NinjaRoute />
    </div>
  )
}

export default App