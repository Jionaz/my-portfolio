import foto from "../images/Programmer-bro.svg"
const Main = () => {
  return (
    <div className="bodyMain">
      <div className="left">
        <img src={foto} alt="sample" />
      </div>
      <div className="right">
        <h1>Olá, meu nome é Jionaz</h1>
        <p>
          Meu nome é Jionaz, atualmente tenho 21 anos. Filho de uma professora e
          um empresário tenho facilidade em comunicação e sou formado em ingles
          des de os 16 anos. No meu tempo livre gosto de sair com meus amigos
          para conversar ou as vezes acabo ficando em casa jogando online. Estou
          fazendo o primeiro semestre de ADS na faculdade UNIFASIPE. Fiz 4
          semestres de psicologia mas acabei saindo por conta que eu não me via
          trabalhando na profissão. Pretendo futuramente abrir uma empresa de BI
          com um colega de classe. Meu inicio no mundo de ADS está um pouco
          lento por conta da minha falta de tempo, mas espero conseguir resolver
          esse problema e criar uma boa carreira nesse ramo.
        </p>
      </div>
    </div>
  )
}

export default Main
