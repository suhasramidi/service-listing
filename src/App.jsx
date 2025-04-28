import { useState } from 'react'
import './App.css'
import data from "./data.json"
import ServiceCard from './components/ServiceCard'

function App() {
  const [details,setDetails] = useState({
    service:"",
    description:""
  })

  return (
    <>
    <div>
   
    {
      data.map((ele)=>(
        <ServiceCard title={ele.service} description={ele.description} key={ele.id}/>
      ))
    }

    </div>
    
      
    </>
  )
}

export default App