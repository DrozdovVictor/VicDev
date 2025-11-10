import { useState, useRef } from "react"
import Link from "../Link/link"
import SearchIcon from "../../../Pages/App/Images/Works-section/search-icon.svg"
import "./Work.scss"

function Work(workName, workImg, workDesc, workModalImg) {
  const [modalImg, setModalImg] = useState(null)
  const modal = useRef(null)
  const modalContent = useRef(null)

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
    <div className="works__work" data-work-type="website">
      <div
        className="works__work-img-wrapper"
        onClick={() => {
          setModal()
          setModalImg(workModalImg)
        }}
      >
        <img
          src={workImg}
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
        <h4 className="works__work-name">{workName}</h4>
        <p className="works__work-desc">{workDesc}</p>
        <Link
          href="https://drozdovvictor.github.io/Novo-Website/"
          className="works__work-link-name"
          blank
        >
          Link
        </Link>
      </div>
    </div>
  )
}

export default Work
