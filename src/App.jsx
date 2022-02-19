import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <CounterTwo /> */}
      <CounterThree />
    </div>
  )
}

export default App
