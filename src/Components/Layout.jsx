import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Details from './Details'

export default function Layout() {
  return (
    <>
<Navbar/>

<Outlet/>
<Details/>
<Footer/>
        
    </>
  )
}
