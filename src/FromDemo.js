import React, { useState } from "react"

function FromDemo({ message }) {
  const [name, setName] = useState("")

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  return (
    <div>
      <p>{message}</p>
      <p>{name}</p>
      <form>
        <input type="text" value={name} onChange={handleInputChange} />
      </form>
    </div>
  )
}

export default FromDemo
