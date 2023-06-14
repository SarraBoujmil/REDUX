import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
  
    const Todoss=useSelector(store=>store)
  
    
 
    return (
    <div>
  
    {Todoss && Todoss.map(t=><h1>{t.text}</h1>)}

    </div>
  )
}

export default Todos