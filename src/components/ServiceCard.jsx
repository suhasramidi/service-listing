
import React from "react"


function ServiceCard(data) {
  const ServiceCard = ({data})=>{

  return (
    <>
    <div>
    <h3>{data.service}</h3>
    <p>ServiceName: {data.description}</p>
      </div>
    </>
  )
}}

export default App