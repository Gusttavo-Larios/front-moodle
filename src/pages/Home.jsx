import React, { useEffect, useState } from "react";
import Cursos from "../components/Cursos";
import api from "../services/api";
import "../styles/App.css";

export default function Home() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos();
  }, []);

  async function getCursos() {
    try {
      const response = await api.get("");
      console.log(response.data);
      setCursos(response.data);
    } catch (error) {}
  }

  return (
    <div className="containerHome">
      <div className="containerHeader"></div>
      <div className="containerBody">
        <div className="cursos">
          {cursos.map((item, key) => (
            <Cursos
              key={key}
              logo={item.logo}
              nome={item.nome}
              descricao={item.descricao}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
