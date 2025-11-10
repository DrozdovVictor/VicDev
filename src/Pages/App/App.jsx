/* React imports */
import { useRef, useState } from "react"
/* Component Imports */
import Header from "../../assets/components/Header/header"
import Footer from "../../assets/components/Footer/footer"
import Button from "../../assets/components/Button/button"
import Number from "../../assets/components/Number/number"
import Circle from "../../assets/components/Circle/circle"
import Link from "../../assets/components/Link/link"
/* Hero Section imports */
import HeroImg2K from "./Images/Hero-section/hero-img-2k.png"
import HeroImgDesktop from "./Images/Hero-section/hero-img-desktop.png"
import HeroImgLaptop from "./Images/Hero-section/hero-img-laptop.png"
import HeroImgMobile from "./Images/Hero-section/hero-img-mobile.png"
/* Skill Section imports */
import Skill from "../../assets/components/Skill/Skill"
import HtmlLogo from "../../Pages/App/Images/Skills-section/html-logo.svg"
import CssLogo from "../../Pages/App/Images/Skills-section/css-logo.svg"
import JsLogo from "../../Pages/App/Images/Skills-section/js-logo.svg"
import ReactLogo from "../../Pages/App/Images/Skills-section/react-logo.svg"
import ScssLogo from "../../Pages/App/Images/Skills-section/scss-logo.svg"
import TailwindLogo from "../../Pages/App/Images/Skills-section/tailwind-logo.svg"
import GitLogo from "../../Pages/App/Images/Skills-section/git-logo.svg"
/* Works Section imports */
import NovoWorkImg from "../../Pages/App/Images/Works-section/novo-work-img.png"
import StateumWorkImg from "../../Pages/App/Images/Works-section/stateum-work-img.png"
import TodoListWorkImg from "../../Pages/App/Images/Works-section/todo-list-work-img.png"
// import Work from "../../assets/components/Work/Work"
import SearchIcon from "../../Pages/App/Images/Works-section/search-icon.svg"
import NovoWorkModalImg from "../App/Images/Works-section/work-1-modal-img.png"
import StateumWorkModalImg from "../App/Images/Works-section/work-2-modal-img.png"
import TodoListModalImg from "../App/Images/Works-section/work-3-modal-img.png"
/* App imports */
import "./App.scss"
import "./AppMedia.scss"
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [modalImg, setModalImg] = useState(null)
  const tabs = useRef(null)
  const works = useRef(null)
  const modal = useRef(null)
  const modalContent = useRef(null)
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth)
  })

  window.addEventListener("reload", () => {
    setWindowWidth(window.innerWidth)
  })

  function returnPortrait() {
    return (
      <picture className="hero__img" id="hero-img">
        <source srcSet={HeroImgMobile} media="(max-width: 767px)" />
        <source srcSet={HeroImgLaptop} media="(max-width: 1439px)" />
        <source srcSet={HeroImgDesktop} media="(max-width: 2559px)" />
        <img srcSet={HeroImg2K} loading="lazy" alt="hero-img" />
      </picture>
    )
  }

  function scrollToSkills() {
    const skills = document.getElementById("skills")
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" })
    }
  }

  function findCorrectWorks(text) {
    for (let i = 0; i < works.current.children.length; i++) {
      if (
        works.current.children.item(i).getAttribute("data-work-type") === text
      ) {
        works.current.children.item(i).style.display = "flex"
      } else {
        works.current.children.item(i).style.display = "none"
      }

      if (text === "all") {
        works.current.children.item(i).style.display = "flex"
      }
    }
  }

  function setTargetTabActive(targetTab) {
    for (let i = 0; i < tabs.current.children.length; i++) {
      tabs.current.children.item(i).className = "works__tab"
    }

    if (targetTab.target.className !== "works__tab") {
      const tab = targetTab.target.closest(".works__tab")
      tab.className = "works__tab active"
    } else targetTab.target.className = "works__tab active"

    if (targetTab.target.getAttribute("data-tab-type")) {
      switch (targetTab.target.getAttribute("data-tab-type")) {
        case "all":
          findCorrectWorks("all")
          break
        case "website":
          findCorrectWorks("website")
          break
        case "js":
          findCorrectWorks("js")
          break
      }
    } else {
      const tab = targetTab.target.closest(".works__tab")
      switch (tab.getAttribute("data-tab-type")) {
        case "all":
          findCorrectWorks("all")
          break
        case "website":
          findCorrectWorks("website")
          break
        case "js":
          findCorrectWorks("js")
          break
      }
    }
  }

  function setModal(target) {
    if (target) {
      if (target.target.className === "works__modal active") {
        modal.current.style.opacity = 0
        modalContent.current.style.scale = 0
        modalContent.current.style.opacity = 0

        setTimeout(() => {
          modal.current.style.display = "none"
          modal.current.className = "works__modal"
        }, 350)
        return (document.body.style.overflow = "auto")
      }
    } else {
      modal.current.style.display = "flex"

      setTimeout(() => {
        modal.current.className = "works__modal active"
        modal.current.style.opacity = 1
        modalContent.current.style.scale = 1
        modalContent.current.style.opacity = 1
      }, 10)
      return (document.body.style.overflow = "hidden")
    }
  }

  return (
    <>
      <Header></Header>
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero__content">
              <div className="hero__text-content" id="hero-text-content">
                <div className="hero__text-content-block">
                  <h1 className="hero__heading">
                    Hi, it’s{" "}
                    <span className="hero__span hero__span_dark-blue">
                      Victor
                    </span>
                  </h1>
                  <h3 className="hero__subHeading">
                    I’m a{" "}
                    <span className="hero__span hero__span_blue">
                      frontend developer
                    </span>
                  </h3>
                  <p className="hero__text">
                    I create modern, fast and fully responsive user interfaces
                    that look and perform great on any device. My goal is to
                    transform design into technological, convenient, and
                    high-tech products that help businesses grow and stand out
                    in the market.
                  </p>
                </div>
                {windowWidth < 1024 && returnPortrait()}
                <div className="hero__button-block-wrapper">
                  <Button
                    className="hero__button"
                    onClick={() => scrollToSkills()}
                  ></Button>
                  <Circle className="hero__circle" />
                </div>
              </div>
              {windowWidth >= 1024 && returnPortrait()}
            </div>
          </div>
          <Number className="hero__number">01</Number>
        </section>
        <section className="skills" id="skills">
          <div className="container">
            <div className="skills__heading-wrapper">
              <h2 className="skills__heading">Skills</h2>
              <Circle className="circle skills__circle purple" />
            </div>
            <div className="skills__skills-row">
              <Skill skillName="Html" skillLogoImg={HtmlLogo} />
              <Skill skillName="Css" skillLogoImg={CssLogo} />
              <Skill skillName="Js" skillLogoImg={JsLogo} />
              <Skill skillName="React" skillLogoImg={ReactLogo} />
              <Skill skillName="Scss" skillLogoImg={ScssLogo} />
              <Skill skillName="Tailwind" skillLogoImg={TailwindLogo} />
              <Skill skillName="Git" skillLogoImg={GitLogo} />
            </div>
          </div>
          <Number className="skills__number">02</Number>
        </section>
        <section className="works" id="works">
          <div className="container">
            <div className="works__heading-wrapper">
              <h2 className="works__heading">Works</h2>
              <Circle className="works__circle blue" />
            </div>
            <div className="works__tabs-wrapper">
              <div className="works__tabs" ref={tabs}>
                <div
                  className="works__tab active"
                  onClick={(e) => setTargetTabActive(e)}
                  data-tab-type="all"
                >
                  <h4 className="works__tab-text">All</h4>
                </div>
                <div
                  className="works__tab"
                  onClick={(e) => setTargetTabActive(e)}
                  data-tab-type="website"
                >
                  <h4 className="works__tab-text">Websites</h4>
                </div>
                <div
                  className="works__tab"
                  onClick={(e) => setTargetTabActive(e)}
                  data-tab-type="js"
                >
                  <h4 className="works__tab-text">JS</h4>
                </div>
              </div>
              <div className="works__works" ref={works}>
                {/* <Work /> */}
                <div className="works__work" data-work-type="website">
                  <div
                    className="works__work-img-wrapper"
                    onClick={() => {
                      setModal()
                      setModalImg(NovoWorkModalImg)
                    }}
                  >
                    <img
                      src={NovoWorkImg}
                      className="works__work-img"
                      loading="lazy"
                      alt="Novo-landing-page"
                      draggable="false"
                    />
                    <div className="works__work-img-overlay"></div>
                    <img
                      src={SearchIcon}
                      loading="lazy"
                      className="works__work-img-search-icon"
                      alt="loupe"
                    />
                  </div>
                  <div className="works__work-text-content">
                    <h4 className="works__work-name">Novo website</h4>
                    <p className="works__work-desc">
                      A template of marketplace specializing in the sale of
                      commercial vehicles. The platform offers sellers
                      convenient conditions for listing and selling their
                      products. A user-friendly interface that simplifies the
                      selling process.
                    </p>
                    <Link
                      href="https://drozdovvictor.github.io/Novo-Website/"
                      className="works__work-link-name"
                      blank
                    >
                      Link
                    </Link>
                  </div>
                </div>
                <div className="works__work" data-work-type="website">
                  <div
                    className="works__work-img-wrapper"
                    onClick={() => {
                      setModal()
                      setModalImg(StateumWorkModalImg)
                    }}
                  >
                    <img
                      src={StateumWorkImg}
                      className="works__work-img"
                      loading="lazy"
                      alt="Stateum-landing-page"
                      draggable="false"
                    />
                    <div className="works__work-img-overlay"></div>
                    <img
                      src={SearchIcon}
                      loading="lazy"
                      className="works__work-img-search-icon"
                      alt="loupe"
                    />
                  </div>
                  <div className="works__work-text-content">
                    <h4 className="works__work-name">Stateum</h4>
                    <p className="works__work-desc">
                      Website as an example of a platform for investing in
                      overseas real estate. A user-friendly, intuitive interface
                      with sections describing the platform&apos;s products and
                      services, designed to engage visitors.
                    </p>
                    <Link
                      href="https://drozdovvictor.github.io/Stateum_Website/"
                      className="works__work-link-name"
                      blank
                    >
                      Link
                    </Link>
                  </div>
                </div>
                <div className="works__work" data-work-type="js">
                  <div
                    className="works__work-img-wrapper"
                    onClick={() => {
                      setModal()
                      setModalImg(TodoListModalImg)
                    }}
                  >
                    <img
                      src={TodoListWorkImg}
                      className="works__work-img"
                      loading="lazy"
                      alt="Novo-landing-page"
                      draggable="false"
                    />
                    <div className="works__work-img-overlay"></div>
                    <img
                      src={SearchIcon}
                      loading="lazy"
                      className="works__work-img-search-icon"
                      alt="loupe"
                    />
                  </div>
                  <div className="works__work-text-content">
                    <h4 className="works__work-name">To-do list</h4>
                    <p className="works__work-desc">
                      Application that helps users organize their tasks and plan
                      their time productively. Ability to add, edit, delete
                      tasks and other.
                    </p>
                    <Link
                      href="https://drozdovvictor.github.io/To-do-App/"
                      className="works__work-link-name"
                      blank
                    >
                      Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="works__modal"
            onClick={(e) => {
              setModal(e)
            }}
            ref={modal}
          >
            <div
              className="works__modal-content"
              onClick={(e) => setModal(e)}
              ref={modalContent}
            >
              <div className="works__modal-scroll">
                <img
                  loading="lazy"
                  className="works__modal-img"
                  src={modalImg}
                  alt="modal-img"
                />
              </div>
              <h4 className="works__modal-work-name">
                {modalImg === NovoWorkModalImg && "Novo-landing-page"}
                {modalImg === StateumWorkModalImg && "Stateum-landing-page"}
                {modalImg === TodoListModalImg && "To-do-App"}
              </h4>
            </div>
          </div>
          <Number className="works__number">03</Number>
          <Circle className="works__second-circle red"></Circle>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
export default App
