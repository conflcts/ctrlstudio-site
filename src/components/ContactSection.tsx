interface ContactSectionProps {
  onGetInTouch: () => void
}

export function ContactSection({ onGetInTouch }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__header">
        <span className="contact-section__label">// Contact</span>
        <h2 id="contact-title" className="contact-section__title">
          Get in touch<span className="contact-section__blink">.</span>
        </h2>
      </div>
      <p className="contact-section__text">Let's create something meaningful together.</p>
      <button type="button" className="hero__cta-btn contact-section__cta" onClick={onGetInTouch}>
        CONTACT
      </button>
    </section>
  )
}
