import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import LogoIf from "../assets/logoif.svg"
import api from '../services/api'
import { toastOptions } from '../config/toast.config'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/Cadastro.css'

export default function Cadastro() {
  const [curso, setCurso] = useState("")
  const [coordenador, setCoordenador] = useState("")
  const [descricao, setDescricao] = useState("")

  async function request() {
    const formData = {
      curso: curso,
      coordenador: coordenador,
      descricao: descricao
    }
    await api.post('/cadastrar', formData)
      .then((response) => {
        setCurso('')
        setCoordenador('')
        setDescricao('')
        toast.success("Curso cadastrado com sucesso!", toastOptions)
      })
      .catch((error) => toast.error("Ops! tente mais tarde...", toastOptions))
  }

  return (
    <div className="containerCadastro">
      <Helmet>
        <title>Cadastro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <form className="form">
        <img src={LogoIf} alt="Logo IF" />
        <span>Cadastro de cursos</span>
        <label>Curso</label>
        <input
          className="inputText"
          type="text"
          name="nome"
          maxLength={80}
          value={curso}
          onChange={(item) => setCurso(item.target.value)}
        />
        <label>Coordenador</label>
        <input
          className="inputText"
          type="text"
          name="professor"
          maxLength={80}
          value={coordenador}
          onChange={(item) => setCoordenador(item.target.value)}
        />
        <label>Descricao</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength="480"
          value={descricao}
          onChange={(item) => setDescricao(item.target.value)}></textarea>
        <div className="containerButtons">
          <button className="cadastrar" type="button" onClick={() => request()}>Cadastrar</button>
          <button className="back" type="button"><Link to="/">Voltar</Link></button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}