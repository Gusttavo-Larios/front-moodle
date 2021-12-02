import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import Cursos from "../components/Cursos";
import ModalCurso from "../components/Modal";
import SemCurso from '../assets/sem-cursos.svg'
import api from "../services/api";
import Logo from '../assets/logoBranca.svg'
import { toastOptions } from "../config/toast.config";
import 'react-toastify/dist/ReactToastify.css'
import "../styles/App.css";

export default function Home() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos();
  }, []);

  async function getCursos() {
    await api.get("")
      .then((response) => setCursos(response.data))
      .catch(() => toast.error("Ops! tente mais tarde...", toastOptions));
  }

  return (
    <div className="containerHome">
      <Helmet>
        <title>Cadastro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="containerHeader">
        <img src={Logo} alt="Logo IF" />
        <Link className="link" to="/cadastro">Cadastrar</Link>
      </div>
      <div className="containerBody">
        <h1>{cursos.length > 0 ? "Cursos" : "Não há cursos"}</h1>
        {cursos.length > 0 ?
          <div className="cursos">
            {cursos.map((item, key) => <Cursos key={key} item={item} />)}
          </div>
          :
          <img src={SemCurso} alt="Sem cursp" className="semCurso" />
        }
      </div>
      <ModalCurso />
      <ToastContainer />
    </div>
  );
}
