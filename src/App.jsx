import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {Header,Footer, } from "./components/index"
function App() {

  // Fetch all genres and their movies


  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
