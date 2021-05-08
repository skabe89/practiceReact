import React, {useState} from 'react'

export default function Form() {
  const [state, setState] = useState({
    name: "",
    email: ''
  })
  const [info, setInfo] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    print()
  }

  const print = () => {
    setInfo({...state})
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={state.name} onChange={handleChange}/>
        <br/>
        <label>Email</label>
        <input name="email" type="text" value={state.email} onChange={handleChange}/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    <div>
      <h1>{info.name}</h1>
      <h2>{info.email}</h2>
    </div>  
    </div>
  )
}
