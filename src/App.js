import React from 'react';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import Footer from './components/Footer/Footer'

const App = () => {
  return (

    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
    </AuthContextProvider>

  )
}

export default App

