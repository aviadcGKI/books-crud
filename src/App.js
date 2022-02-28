import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Container } from './components/styledComponents/Container.styled';

function App() {
  return (
    <div>
        <Container>     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="author" element={<About />} />
            </Routes>
        </Container>
    </div>
  )
}

export default App