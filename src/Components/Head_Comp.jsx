import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from '../Components/Footer'

export default function Head_Comp() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}
