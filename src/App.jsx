import { useReducer, useState } from "react";
import { useForm } from "./hooks/useForm"
import { login } from "./api/authApi";
import { types } from "./types/types";
import { authReducer } from "./reducers/authReducer";


const initialState = {
  user: {},
  token: ''
}

export const App = () => {

 const [ state, dispatch ] = useReducer(authReducer, initialState)


  const [values, setValues]= useState({
    username: '',
    password: ''
  })



  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(username, password)
    .then( resp => {
      dispatch({
        type: types.login,
        payload: resp
      })
      alert('Bienvenido')
    })
    .catch( err => {
      console.log(err)
    })    
  }

  const handleInputChange = ({ target }) => {
    setValues({
        ...values,
        [target.name]: target.value
    })
}


  const { username, password } = values;

  return (
    <div className='container'>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1>Login</h1>
            <form
              onSubmit={handleSubmit}
              action="">
              <input 
                type="text" 
                className='form-control mb-3' 
                placeholder='Ingrese usuario'
                onChange={handleInputChange}
                value={username}
                name="username"
                />
              
              <input 
                type="password" 
                className='form-control mb-3' 
                placeholder='Ingrese contraseña'
                onChange={handleInputChange}
                value={password}
                name="password"
                />

              <button type="submit" className='btn btn-primary'>Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}
