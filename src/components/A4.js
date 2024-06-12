import React, { useContext } from 'react'
import A5 from './A5'
import { myFirstContext } from './A'

function A4() {

    const myContextApiData = useContext(myFirstContext)
    console.log("data ==== ", myContextApiData);
  return (
    <div>
        <h2>A4 component</h2>
      <A5/>
    </div>
  )
}

export default A4
