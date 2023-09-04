/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";


/* fonction qui permet de renvoyer a la bonne section au clique */

const navbarClick = (event, sectionName) => {
  event.preventDefault();
  const section = document.querySelector(sectionName);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};



const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services" onClick={(event) => navbarClick(event, ".ServicesContainer")}>Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations" onClick={(event) => navbarClick(event, ".EventsContainer")}>Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe" onClick={(event) => navbarClick(event, ".PeoplesContainer")} >Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
