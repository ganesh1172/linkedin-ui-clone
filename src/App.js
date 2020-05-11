import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import Footer from './component/footer'
function App() {
  return (
    <div id="app_container">
      <header className="head"></header>
      <div className="app_content">
        <Container max-width="sm">
          <h2>hello</h2>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default App;
