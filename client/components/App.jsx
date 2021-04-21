import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Header from './Header'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  }, [count])

  return (
    <>
      <Header />
      <h1>{greeting}</h1>
      <h3>Vote for your favourite ride type</h3>
      <button onClick={() => setCount(count + 1)}>Mountain Biking</button>
      {count}
    </>
  )
}

export default App
