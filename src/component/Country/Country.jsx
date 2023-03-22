import React from 'react'

export default function Country({countries}) {
    const {name,cca2,area,flags}=countries;
   
  return (
    
    <div className="card  col-4 g-4">
    <img src={flags.png} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{name.common}</h5>
      <p className="card-text">Area:{area}</p>
      <p className="card-text">{cca2}</p>
    </div>
  </div>
  )
}
