import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <nav>
        <ul>
            <li><Link to ={"/"}>Home</Link></li>
            <li><Link to ={"/Sobre"}>Sobre</Link></li>
            <li><Link to ={"/Contato"}>Contato</Link></li>
            {user.role ==="Admin" && <li><Link to ={"/Admin"}>Administrador</Link></li>}
        </ul>
    </nav>
  )
}

export default Navbar