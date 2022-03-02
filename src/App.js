import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from './components/styledComponents/styledContainer';
import Navbar from 'components/navbar';
import { Profile, Author, Books, Home } from 'components/pages';

function App() {
  return (
    <div>
        <BrowserRouter>   
          <Navbar />
          <Container>  
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/author" element={<Author />} />
                <Route path="/books" element={<Books />} />
                <Route path="/author/:id" element={<Profile />} />
              </Routes>
          </Container>
        </BrowserRouter>
    </div>
  )
}

export default App