import React from 'react'
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./Home"
import About from "./About"
import Footer from './components/Footer'

export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}
