interface FooterProps {
  onGetInTouch: () => void
}

const SITE_EMAIL = 'hello@ctrlstudio.xyz'

export function Footer({ onGetInTouch }: FooterProps) {
  return (
    <footer className="footer footer--mugen">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="/" className="footer__logo-link" aria-label="Ctrl Home">
            <img src="/globe-logo.png" alt="Ctrl" className="footer__logo-img" />
          </a>
        </div>
        <div className="footer__location">
          Based in Toronto (CA) {new Date().toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__left">
          <button type="button" className="footer__email" onClick={onGetInTouch}>
            {SITE_EMAIL} +
          </button>
          <blockquote className="footer__quote">
            &ldquo;Your next project deserves world-class design. Stop settling for mediocre and start working with designers who care as much as you do.&rdquo;
          </blockquote>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#">Home</a>
          <a href="#services">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
