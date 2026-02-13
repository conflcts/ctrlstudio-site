import { useState, useEffect } from 'react'

interface NavbarProps {
  onGetInTouch: () => void
}

export function Navbar({ onGetInTouch: _onGetInTouch }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', hour12: true }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Studio' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="navbar navbar--mugen">
        <a href="/" className="navbar__logo navbar__logo--large" aria-label="Ctrl Home">
          <img src="/globe-logo.png" alt="Ctrl" className="navbar__logo-img" width={170} height={48} />
          <span className="navbar__since">© Since — 2020</span>
        </a>
        <div className="navbar__center">
          <span className="navbar__location">Toronto (CA) {time}</span>
        </div>
        <div className="navbar__right">
          <button
            type="button"
            className="navbar__menu-toggle navbar__menu-toggle--edgy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="navbar__close-icon">×</span>
            ) : (
              <svg className="navbar__burger-icon" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <line x1="2" y1="4" x2="30" y2="4" />
                <line x1="2" y1="12" x2="30" y2="12" />
                <line x1="2" y1="20" x2="30" y2="20" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile navbar__mobile--open" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="navbar__mobile-backdrop" onClick={closeMenu} aria-hidden />
          <div className="navbar__mobile-brand">
            <a href="/" className="navbar__mobile-brand-link" onClick={closeMenu}>
              <img src="/globe-logo.png" alt="Ctrl" className="navbar__mobile-brand-logo" width={170} height={64} />
              <span className="navbar__mobile-tagline">A design studio, built different.</span>
            </a>
          </div>
          <div className="navbar__mobile-panel">
            <div className="navbar__mobile-panel-header">
              <span className="navbar__mobile-panel-title">Menu</span>
              <button
                type="button"
                className="navbar__mobile-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span className="navbar__mobile-close-icon">×</span>
              </button>
            </div>
            <nav className="navbar__mobile-nav">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} onClick={closeMenu} className="navbar__mobile-link">
                  {label}
                </a>
              ))}
            </nav>
            <hr className="navbar__mobile-divider" />
            <div className="navbar__mobile-talk">
              <span className="navbar__mobile-talk-label">Let&apos;s Talk</span>
              <a
                href="mailto:hello@ctrlstudio.xyz"
                className="navbar__mobile-email"
                onClick={closeMenu}
              >
                hello@ctrlstudio.xyz <span className="navbar__mobile-email-plus">+</span>
              </a>
              <span className="navbar__mobile-location">Toronto (CA) {time}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
