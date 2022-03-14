import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from 'components/navbar';
import { Profile, Authors, Books, Home, CreateBook, CreateAuthor, BookDetails } from 'components/pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/createBook" exact component={CreateBook} />
          <Route path="/books" exact component={Books} />
          <Route path="/author/:id" exact component={Profile} />
          <Route path="/book/:id" exact component={BookDetails} />
          <Route path="/createAuthor" exact component={CreateAuthor} />
      </BrowserRouter>
    </div>
  )
}

export default App