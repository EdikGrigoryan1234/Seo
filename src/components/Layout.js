import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './Global.css';
function Layout() {
  return (
	 <>
		<Header/>
		<main className=' w-full'>
			<Outlet/>
		</main> 
		<Footer/>
	 </>
  )
}

export default Layout
