import React, {useState} from 'react'
import { connect } from 'react-redux'

function Form(props) {
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
    props.setName(state.name)
    props.setEmail(state.email)
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

const mapDispatchToProps = (dispatch) => {
  return{
    setName: (name) => dispatch({type: "SET_NAME", payload: name}),
    setEmail: (email) => dispatch({type: "SET_EMAIL", payload: email})
  }
}

export default connect(null, mapDispatchToProps)(Form)
