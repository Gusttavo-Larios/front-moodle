import React from 'react';
import '../styles/Curso.css'
// import { Container } from './styles';

function Cursos({ logo, nome, descricao }) {
  return (
    <div className="containerCurso">
      <img src={logo} alt={nome} />
      <span className="titulo">{nome}</span>
      <span className="descricao">{descricao}</span>
    </div>
  )
}

export default Cursos;