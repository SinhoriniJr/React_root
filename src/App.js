import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Admin from './pages/Admin';
import PrivateRout from './Componentes/PrivateRout';
import './index.css'

function App() {

  const user = { name: "Milton", role: "Admin" }; //mock
  return (


    <BrowserRouter>
      <header>
        <Navbar user={user} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Admin' element={<PrivateRout user={user} requiredRole="Admin" element={<Admin />} />}>
            <Route index element={<h2> Bem-vindo à área administrativa</h2>} />
            <Route path ="usuarios" element ={<h2>Gerenciar Usuários</h2>}/>
            <Route path='configuracoes' element={<h2>Configurações do Sistema</h2>} />
            <Route path='*' element= {<h2>Página não encontrada</h2>} />
          </Route>
          <Route path='/negado' element={<h2>Acesso negado</h2>} />
        </Routes>
      </main>
    </BrowserRouter>


  );
}

export default App;
