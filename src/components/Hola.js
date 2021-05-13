import React, {useState} from 'react'
import {connect} from 'react-redux'


function Hola(props) {

  const [greeting, setGreeting] = useState("")

  const handleClick = () => {
    greeting === "" ? setGreeting("Hola") : setGreeting("")
  }

  return (
    <div className="card">
      {console.log(props.name)}
      <h1>{greeting} {props.name !== "" ? props.name : null}</h1>
      <h2>{props.email}</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    string: state.string,
    name: state.name,
    email: state.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setString: (string) => dispatch({type: "SET_STRING", payload: string})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hola)
