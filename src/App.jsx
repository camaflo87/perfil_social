import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Link from "./Components/Link";

function App() {
  const [currentImg, setCurrentImg] = useState();
  const [contenImg, setContenImg] = useState(false);

  function evento_link(item) {
    setContenImg(true);
    setCurrentImg(item);
  }

  return (
    <>
      <main className="main">
        <Header />
        <nav className="navegacion">
          <Link link={"GitHub"} evento_link={evento_link} />
          <Link link={"Frontend Mentor"} evento_link={evento_link} />
          <Link link={"Linkedin"} evento_link={evento_link} />
          <Link link={"Twitter"} evento_link={evento_link} />
          <Link link={"Instagram"} evento_link={evento_link} />
        </nav>
      </main>

      <section className="logo" id="logo">
        <div className="logo_div">
          <img
            src={`./public/images/${currentImg}.png`}
            alt="Imagen red social"
            className={contenImg ? "logo_red" : "logo_borrar"}
            width={200}
          />
        </div>
      </section>
    </>
  );
}

export default App;
