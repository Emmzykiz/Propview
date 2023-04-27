import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './widgets/Nav.jsx';
import Footer from './widgets/Footer.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Error404 from './pages/Error404.jsx';
import Property from './pages/Property.jsx';
import ImageCarousel from "./widgets/Carousel";
// import TestimonyCarousel from './pages/testimony.jsx';
import Privacy from './pages/Privacy.jsx';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='history' element={<History />} />
          <Route path='properties' element={<Property />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <ImageCarousel />
      {/* <TestimonyCarousel /> */}
      <Footer />
    </>
  )
}

export default App
