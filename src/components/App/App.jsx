import React from 'react';

import './App.css'
import { Header } from '../Header/Header'
import { Games } from '../Games/Games';

function App() {

  return (
    <section className='app'>
      <Header />
      <Games />
    </section>
  )
}

export default App
