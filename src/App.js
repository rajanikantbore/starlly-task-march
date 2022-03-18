import React from 'react'
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import Tabledata from './components/Tabledata';

const App = () => {
  return (
    <div className='App'>
      < Navbar />
      <div className='container'>
        < Chart />
        < Tabledata />
      </div>
    </div>
  )
}

export default App 