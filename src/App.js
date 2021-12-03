import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Characters from './components/Characters/Characters'
import Episodes from './components/Episodes/Episodes'
import Locations from './components/Locations/Locations'
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails'
import LastSeen from './components/LastSeen/LastSeen'

export const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/details/:id' element={<CharacterDetails />} />
          <Route path='/last' element={<LastSeen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
