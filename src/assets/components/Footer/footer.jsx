import './footer.scss'
import TgLogo from './Images/tg-logo.svg'
import Link from '../Link/link'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text-content">
            <p className="footer__logo">VicDev</p>
            <p className="footer__text">
              Thanks for watching;) <span>&copy; 2025</span>
            </p>
          </div>
          <div className="footer__socials">
            <div className="footer__social-item">
              <img className="footer__social-icon" loading="lazy" src={TgLogo} alt="tg-logo" />
              <Link href="https://t.me/@Victor_da1" className="footer__social-text" blank>
                Tg
              </Link>
            </div>
            {/* <a href="https://www.instagram.com/vicdev/"></a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
