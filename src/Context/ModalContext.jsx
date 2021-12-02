import React, { createContext, useState } from "react"

export const ModalContext = createContext({
  visibilidade: Boolean,
  conteudo: Object,
  setVisibilidade: () => null,
  setConteudo: () => null
})

export function ModalProvider(props) {
  const [visibilidade, setVisibilidade] = useState(false)
  const [conteudo, setConteudo] = useState({})
  return (
    <ModalContext.Provider value={{
      visibilidade,
      conteudo,
      setVisibilidade,
      setConteudo,
    }}>
      {props.children}
    </ModalContext.Provider>
  )
}