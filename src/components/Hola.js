import React, {useState} from 'react'


export default function Hola() {

  const [greeting, setGreeting] = useState("")

  const handleClick = () => {
    greeting === "" ? setGreeting("Hola") : setGreeting("")
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
