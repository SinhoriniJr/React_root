import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Admin from './pages/Admin';
import PrivateRout from './Componentes/PrivateRout';

function App() {

  const user={name:"Milton", role: "Admin"}; //mock
  return (

    <>
      <BrowserRouter>
        <Navbar user={user} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Admin' element={<PrivateRout user={user} requiredRole="Admin" element={<Admin/>}/>} />
          <Route path='/negado' element={<h2>Ops! Acesso negado</h2>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
