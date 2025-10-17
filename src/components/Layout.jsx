import React from 'react'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import SideBar from './SideBar'

const Layout = ({children}) => {
  return (
    <div>
        <Header  />
        <div className="sidebar">
            <SideBar/>
            <div className="children">
                {children}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout