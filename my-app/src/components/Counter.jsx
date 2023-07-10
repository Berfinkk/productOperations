import React from 'react'

function Counter(props) {
    const {counter,setCounter,children}=props
  return (
    <div>
     <button onClick={()=>setCounter(counter+1)}>+</button>
     {children}
     <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}

export default Counter