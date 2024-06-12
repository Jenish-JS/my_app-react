import React, { createContext } from 'react'
import A1 from './A1'

const myFirstContext = createContext()

function A() {
  return (
    <div>
        <h2>A component</h2>
        <myFirstContext.Provider value={{name: "weetech", email: "savan@weetechsolution.com", dob: "13/11/2002", position: "CTO"}}>
            <A1/>
        </myFirstContext.Provider>
    </div>
  )
}

export default A
export {myFirstContext}