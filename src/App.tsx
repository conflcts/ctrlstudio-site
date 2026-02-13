import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Navbar,
  HeroSection,
  WhyUsSection,
  WhoWeAreSection,
  ServicesSection,
  ContactSection,
  ContactModal,
  Footer,
  HalftoneBackground,
} from './components'
import './App.css'
import './components/components.css'

const EMAILJS_PUBLIC_KEY = 'FGewRquKA3IyeQTnl'
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)
    } catch {
      // Form will show error on submit if init fails
    }
  }, [])

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form || isSubmitting) return
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatusMessage('❌ Contact form is not configured. Please try email instead.')
      return
    }
    setStatusMessage('')
    setIsSubmitting(true)
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        setStatusMessage('✅ Message sent successfully!')
        form.reset()
      })
      .catch(() => {
        setStatusMessage('❌ Error sending message. Please try again.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <>
      <HeroSection onGetInTouch={() => setContactModalOpen(true)} />
      <div className="hero__bar">
        <div className="hero__social-proof">
          <div className="hero__avatars">
            <span className="hero__avatar" />
            <span className="hero__avatar" />
            <span className="hero__avatar" />
            <span className="hero__avatar" />
            <span className="hero__avatar hero__avatar--you">You?</span>
          </div>
          <div className="hero__social-proof-text">
            <span className="hero__rating">★★★★★ 4.9 / 5</span>
            <span className="hero__clients">100+ Happy clients</span>
          </div>
        </div>
        <p className="hero__desc hero__desc--bar">
          <span className="hero__desc-lead">We&apos;ve reimagined how great design happens.</span>{' '}
          No pitches. No proposals. No project management theater. Just exceptional work from senior designers who become an extension of your team.
        </p>
      </div>
      <div className="agency-site">
        <HalftoneBackground />
        <div className="site-content">
          <Navbar onGetInTouch={() => setContactModalOpen(true)} />

          <main className="main-content">
            <WhyUsSection />

          <WhoWeAreSection />

          <ServicesSection />

          <ContactSection onGetInTouch={() => setContactModalOpen(true)} />

          <Footer onGetInTouch={() => setContactModalOpen(true)} />
          </main>
        </div>

        <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
        statusMessage={statusMessage}
        isSubmitting={isSubmitting}
      />
      </div>
    </>
  )
}

export default App
