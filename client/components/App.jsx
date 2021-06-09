import React from 'react'
// import { getGreeting } from '../apiClient'
// import './main.css'
import Header from './Header'
import ShowImage from './ShowImage'
import Body from './Body'
import MapShow from './MapShow'
import Footer from './Footer'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //     })
  // }, [count])

  return (
    <div className="md:container md:mx-auto pt-6">
      <div>
        <Header />
        <ShowImage/>
        <Body />
        <MapShow />
        <Footer />
      </div>
    </div>
  )
}

export default App
