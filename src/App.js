import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Container from './components/styledComponents/styledContainer';
import Navbar from 'components/navbar';
import { Profile, Authors, Books, Home ,CreateBook,CreateAuthor } from 'components/pages';

function App() {
  return (
    <div>
        <BrowserRouter>   
          <Navbar />
          <Container>  
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/createBook" element={<CreateBook />} />
                <Route path="/books" element={<Books />} />
                <Route path="/author/:id" element={<Profile />} />
                <Route path="/createAuthor" element={<CreateAuthor />} />
              </Routes>
          </Container>
        </BrowserRouter>
    </div>
  )
}

export default App