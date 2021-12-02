import React, { useContext, useEffect } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { ModalContext } from '../Context/ModalContext'
import Close from '../assets/close.svg'
import '../styles/Modal.css'

export default function ModalCurso() {
  const { visibilidade, setVisibilidade, conteudo } = useContext(ModalContext)
  useEffect(() => {
    console.log(visibilidade)
  }, [visibilidade])
  return (
    <>
      {visibilidade &&
        <div className="containerModal">
          <div className="modal">
            <div className="boxColor">
              <div className="effctModal">
                <label className="tituloModal">{conteudo.curso}</label>
                <img src={Close} alt="Close" onClick={() => setVisibilidade(false)} />
              </div>
            </div>
            <div className="bodyModal">
              <label className="labelModal">Coordenador</label>
              <p className="text">{conteudo.coordenador}</p>
              <label className="labelModal">Descrição</label>
              <p className="text">{conteudo.descricao}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}