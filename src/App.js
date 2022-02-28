import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Container } from './components/styledComponents/Container.styled';
import Home from './components/pages/Home';
import Author from './components/pages/Author';
import BooksList from './components/pages/BooksList';
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <BrowserRouter>   
          <Navbar />
          <Container>  
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/author" element={<Author />} />
                <Route path="/books" element={<BooksList />} />
                <Route path="/:id/profile" element={<Profile />} />
              </Routes>
          </Container>
        </BrowserRouter>
    </div>
  )
}

export default App