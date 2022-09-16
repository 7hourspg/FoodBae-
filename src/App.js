import React from 'react'
import Navbar from './components/Navbar'
import Burgerheader from './components/Burgerheader'
import OrderNow from './components/OrderNow'
import Fetchdata from './components/Fetchdata'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Burgerheader/>
      <OrderNow/>
      <Fetchdata/>
      <Category/>
      <Footer/>
    </>
  )
}

export default App