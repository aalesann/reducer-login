import { useContext, useReducer, useState } from "react";
import { useForm } from "./hooks/useForm"
import { login } from "./api/authApi";
import { types } from "./types/types";
import { AuthContext } from "./context/AuthProvider";

export const App = () => {

  const { dispatch } = useContext(AuthContext);

  const { values, handleInputChange, reset } = useForm({
    username: 'alesan',
    password: '123456'
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await login(username, password);
    if(resp.user){

      dispatch({
        type: types.LOGIN,
        payload: resp
      })
      
      alert('Bienvenid@!!!')
      reset()
    } else {
      alert('Algo salió mal')
    }

  }

  const { username, password } = values;

  return (
    <div className='container pt-5'>
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

            <button 
              type="submit" 
              className='btn btn-primary'>
                Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
