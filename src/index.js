import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './index.css';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Sobre />
    <Projetos />
    <Contatos />
    <Footer />
  </React.StrictMode>
);

