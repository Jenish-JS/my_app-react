import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hunter() {

    const navigator = useNavigate()

  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault()

        navigator("/login")
      }}>login</button>
    </div>
  )
}

export default Hunter
