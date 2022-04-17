import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';


export default function MainLayout({children}) {
  return (
    <React.Fragment>
        <Navbar />
            {children}
        <Footer />
    </React.Fragment>
  )
}
