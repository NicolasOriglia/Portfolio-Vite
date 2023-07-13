import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeTwo from "../../assets/shape-1.png";
import { Link } from "react-scroll";

import { FaInstagramSquare, FaMailBulk, FaLinkedin } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapped">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hi, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>NICOLÁS </span>ORIGLIA
          </h1>
          <p className="home__job">
            <span className="text-cs">I am </span>
            <b>UX/UI Designer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">25</span>
              <span className="text-sm text-cs">
                Completed <b>Proyects</b>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                4 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Courses <b>Completed</b>
              </span>
            </p>

            <img src={shapeTwo} alt="shape" className="shape shape__2" />
            <img src={shapeTwo} alt="shape" className="shape shape__3" />
          </div>

          <p className="home__text">
            Busco una oportunidad como diseñador UX/UI, donde pueda aplicar mis
            habilidades para crear experiencias digitales que satisfagan las
            necesidades de los usuarios y aporten valor a los productos y
            servicios. Me gustaría aprender y crecer continuamente junto a un
            equipo de profesionales, trabajando de manera colaborativa.
            Mi experiencia en el desarrollo Front-End complementa mi
            pasión por el diseño, y estoy comprometido a seguir creciendo y
            mejorando.
            <br></br>
            Gracias por visitar mi portfolio web y espero poder trabajar contigo
            pronto.
          </p>

          <div className="home__socials">
            <a
              href="https://www.instagram.com/nicolas_origlia/?igshid=YmMyMTA2M2Y"
              className="home__socials-link"
              target={"_blank"}
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://ar.linkedin.com/in/nicolás-origlia-4bb0ba251"
              className="home__socials-link"
              target={"_blank"}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:Spear98@outlook.es?Subject=Insert%20Subject"
              className="home__socials-link"
              target={"_blank"}
            >
              <FaMailBulk />
            </a>
          </div>

          <div className="home__btns">
            <a
              href="https://drive.google.com/file/d/11P3YtlkExrRRtCKrwJfC2ZX0N7K2G9qM/view?usp=sharing"
              download="NicolasOriglia"
              target="_blank"
              className="btn text-cs"
            >
              Download CV
            </a>

            <Link
              className="hero__link text-cs"
              to={"skills"}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
