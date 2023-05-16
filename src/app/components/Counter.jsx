import React from 'react'
import { useSelector } from 'react-redux'
function Counter() {
  const count = useSelector((state)=>state.counterStore.count)
  return (

    <div className='mt-2 pt-3 pl-2 text-center' style={{borderTop: "1px solid #999"}}>Counter: {count}</div>
  )
}

export default Counter