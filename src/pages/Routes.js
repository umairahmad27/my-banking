import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Routes
import Frontend from "./Frontend"
import Dashboard from "./Dashboard"
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
import { AuthContext } from '../context/AuthContext'
import PrivateRoute from './important/PrivateRoute'

export default function Index() {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Router>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
                <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" element={<Dashboard />} />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}
