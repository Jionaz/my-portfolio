
import NavBar from "./modules/Nav";
import Body from "./modules/Body";
import Contato from "./modules/Contato";
import Api from "./modules/Api";
import Projects from "./modules/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="main">
        <Body />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="apipage" className="whatever">
        <Api />
      </div>
      <div id="contact">
        <Contato />
      </div>

    </div>
  );
}

export default App;
