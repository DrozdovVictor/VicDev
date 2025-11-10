import SkillCircleMobile from "../../../Pages/App/Images/Skills-section/skill-circle-mobile.png"
import SkillCircleDesktop from "../../../Pages/App/Images/Skills-section/skill-circle-desktop.png"
import SkillCircle2K from "../../../Pages/App/Images/Skills-section/skill-circle-2K.png"
import "./Skill.scss"

function Skill({ skillName = "Html", skillLogoImg }) {
  return (
    <div className="skill">
      <div className="skill__imgs">
        <picture>
          <source srcSet={SkillCircleMobile} media="(max-width: 767px)" />
          <source srcSet={SkillCircleDesktop} media="(max-width: 2556px)" />
          <img
            className="skill__circle-img"
            src={SkillCircle2K}
            loading="lazy"
            alt="circle"
            draggable="false"
          />
        </picture>
        <div className="skill__logo-img-block">
          <img
            src={skillLogoImg}
            loading="lazy"
            className="skill__logo-img"
            draggable="false"
            alt={`${skillName}-logo`}
          />
        </div>
      </div>
      <h3 className="skill__name">{skillName}</h3>
      {/* <p className="skill__text">{"skillDesc"}</p> */}
    </div>
  )
}

export default Skill
