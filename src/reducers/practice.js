const initialState = {
  string: '',
  name: '',
  email: ''
}

const practiceReducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_NAME":
    return {
      ...state,
      name: action.payload
    }
    case "SET_STRING":
    return{
      ...state,
      string: action.payload
    }
    case "SET_EMAIL":
    return {
      ...state,
      email: action.payload
    }
    default:
     return state
  }
}

export default practiceReducer