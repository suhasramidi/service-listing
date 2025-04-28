import React from 'react'

const ServiceCard = ({service,description}) => {
  return (
    <div >
      <h2>Title : {service}</h2>
      <h5>Description : {description}</h5>
    </div>
  )
}

export default ServiceCard