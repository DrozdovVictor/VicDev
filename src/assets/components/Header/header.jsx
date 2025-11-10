import './header.scss'
import Link from '../Link/link'
import { useState } from 'react'
function Header() {
  const [isMobileLayout, setIsMobileLayout] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function setMobileLayout() {
    const mobileNav = document.getElementById('header-mobile')
    const mobileNavButton = document.getElementById('header-mobile-nav-button')

    if (isMobileLayout) {
      if (mobileNavButton) {
        mobileNavButton.classList.remove('active')
      }

      document.body.style.overflow = 'visible'
      setIsMobileLayout(isMobileLayout)
      setTimeout(() => setIsMobileLayout(!isMobileLayout), 450)
      mobileNav.style.animation = 'hideMobileNav .5s'
    } else {
      document.body.style.overflow = 'hidden'
      mobileNavButton.classList.add('active')
      setIsMobileLayout(!isMobileLayout)
    }
  }

  addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })
  addEventListener('reload', () => {
    setWindowWidth(window.innerWidth)
  })

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <a href="" className="header__logo">
              VicDev
            </a>
            {windowWidth >= 768 && (
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link href="#hero" className="header__nav-link">
                    Home
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link href="#skills" className="header__nav-link">
                    Skills
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link href="#works" className="header__nav-link">
                    Works
                  </Link>
                </li>
              </ul>
            )}
            {windowWidth < 768 && (
              <button
                onClick={() => {
                  setMobileLayout()
                }}
                className="header__mobile-nav-button"
                id="header-mobile-nav-button"
              >
                <span className="header__mobile-nav-button-line"></span>
              </button>
            )}
          </nav>
        </div>
      </header>
      {isMobileLayout && (
        <div className="header__mobile" id="header-mobile">
          <div className="container">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link
                  href="#hero"
                  className="header__nav-link"
                  onClick={() => {
                    setMobileLayout()
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  href="#skills"
                  className="header__nav-link"
                  onClick={() => {
                    setMobileLayout()
                  }}
                >
                  Skills
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  href="#works"
                  className="header__nav-link"
                  onClick={() => {
                    setMobileLayout()
                  }}
                >
                  Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
