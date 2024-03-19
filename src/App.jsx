import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "rahul",
    age:25
  }

  return (
    <>
      <h1 className='bg-green-400 text black p-4 rounded-xl'>tailwind test</h1>
      
   <Card username = "chaiaurcode" btnText= "click me" />
   <Card username = "rahul" btnText="visit me"/>

    </>
  )
}

export default App
