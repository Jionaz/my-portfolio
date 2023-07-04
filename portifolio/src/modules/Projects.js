import React from 'react'
import { GoAlertFill } from "react-icons/go"
function Projects() {
  return (
    <div id="Projects">
      <h1>Estou trabalhando em meus projetos!</h1>
      <p>Sou um desenvolvedor júnior entusiasmado em compartilhar meu amor pela programação e tecnologia.
        Embora eu esteja no início da minha jornada profissional, não tenho projetos concluídos para mostrar no momento.
        No entanto, estou totalmente empenhado em aprimorar minhas habilidades e construir um portfólio de projetos significativos.
        Atualmente, estou imerso em estudos intensivos e estou aprendendo novas tecnologias,
        linguagens de programação e conceitos de desenvolvimento de software.
        Estou desenvolvendo pequenos projetos pessoais para praticar e aplicar o que tenho aprendido.</p>
      <div className='danger'>
        <GoAlertFill />
      </div>

    </div>
  )
}

export default Projects