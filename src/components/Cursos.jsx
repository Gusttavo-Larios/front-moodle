import React, { useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';
import '../styles/Curso.css'

function Cursos(props) {
  const { setVisibilidade, setConteudo } = useContext(ModalContext)
  return (
    <div className="containerCurso" onClick={() => {
      setVisibilidade(true)
      setConteudo(props.item)
    }}>
      <div className="effect">
        <span className="titulo">{props.item.curso}</span>
      </div>
    </div >
  )
}

export default Cursos;