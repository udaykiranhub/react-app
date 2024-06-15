import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col } from 'react-bootstrap';
import App from './App';



import {BrowserRouter,Routes,Router,Link ,Outlet} from "react-router-dom";

function Home(){

    return (
      <Container className="App">
        <header className="App-header">
          <Row>
          <App />
          </Row>
        </header>
      </Container>
    );
  }
  
  


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

   <BrowserRouter>
   
<Home/>

   </BrowserRouter>

);
