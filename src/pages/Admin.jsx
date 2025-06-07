import React from 'react'
import './index.css'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div id='admin'>
      <div className="admin-left" >
        <ul>
          <li><Link to={"usuarios"}>Gerenciar Usuarios</Link></li>
          <li><Link to={"configuracoes"}>Configurações do Sistemas</Link></li>
        </ul>
      </div>
      <div className='admin-right'>
        <h1>Painel Administrativo</h1>
        {/* (rederizar as rotas filhas dentro de um layout da rota pai.) */}
        <Outlet/>
      </div>
    </div>

  )
}

export default Admin