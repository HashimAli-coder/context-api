
import React from 'react'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'


const App = () => {
  return (
    <div className='App'>
       <h1>Purchase Items</h1>
      <Item name="MacBook" price={25000} />
      <Item name="Iphone 15" price={10000} />
      <Item name="Hardrive" price={500} />
      <Cart />
    </div>
  )
}

export default App
