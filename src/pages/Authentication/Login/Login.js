import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function Login() {

  const { setIsAuthenticated } = useContext(AuthContext)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button className='btn btn-success' onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
