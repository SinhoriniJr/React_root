import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({user}) => {
  return (
    <nav>
        <ul>
            <li><Link to ={"/"}>Home</Link></li>
            <li><Link to ={"/Sobre"}>Sobre</Link></li>
            <li><Link to ={"/Contato"}>Contato</Link></li>
            {user.role ==="Admin" && <li><Link to ={"/Admin"}>Administrador</Link></li>}
        </ul>
        <div className='user-info'>
          {user ? (
            <span> Bem-vindo, {user.name}!</span>
          ) : (
            <span> Você não está Logado</span>
          )
        }
        </div>
    </nav>
  )
}

export default Navbar