import React, { Component, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Login from "../Authentication/Login"

export default function PrivateRoute({ Component }) {

    const { isAuthenticated } = useContext(AuthContext)

    // console.log(props)
    console.log(isAuthenticated)

    if (!isAuthenticated)
        return <Login />

    return (
        <Component />
    )
}
