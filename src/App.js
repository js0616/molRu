import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {

  const [isModalOpen, setIsModalOpen] =useState(false);

  return (
    <div>
      <Nav isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Footer/>
    </div>
  );
}

export default App;
