import React from 'react'
import { useSelector } from 'react-redux'
function Child2() {
    // fetch the data of message slice from store:
    //to fetch the data we need to subscribe to that slice
    const child1Data=useSelector(state=>state.messageReducer.message)
  return (
    <div>The data from child1 is: {child1Data}</div>
  )
}
export default Child2