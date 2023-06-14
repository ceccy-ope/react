import React from 'react'

export default function UserInput({change}) {
    //creating an input element
  return (
    <div>
        <input type="text" onChange ={change} />
    </div>
  )
}
