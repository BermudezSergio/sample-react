import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #4a90e2;
`;





const NavBar = styled.nav`




  margin: 20px;
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
  a:hover {
    color: #4a90e2;
  }
`;

function HomePage() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => setData(response.data))
      .catch(error => console.error("Error al cargar datos:", error));
  }, []);

  return (
    <div>
      <Title>Welcome to My Custom React App!</Title>
      {data ? (
        <p>Data from API: {data.title}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <Title>About Us</Title>
      <p>This is the about page of our custom React app.</p>
    </div>
  );
}

function App() {
  return (
    <AppContainer>
      <Router>
        <NavBar>
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/about"><FaInfoCircle /> About</Link>
        </NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
