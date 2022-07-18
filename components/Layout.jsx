import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Little Bee</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Layout