import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Home() {

  const { setIsAuthenticated } = useContext(AuthContext)

  const navigate = useNavigate()
  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate("/")
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center'>Dashboard Home</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button className='btn btn-success' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
