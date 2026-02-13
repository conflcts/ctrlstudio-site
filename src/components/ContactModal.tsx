import { useEffect } from 'react'

const NAME_MAX_LENGTH = 200
const MESSAGE_MAX_LENGTH = 5000

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  statusMessage: string
  isSubmitting: boolean
}

export function ContactModal({
  isOpen,
  onClose,
  onSubmit,
  statusMessage,
  isSubmitting,
}: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="contact-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id="contact-modal-title" className="contact-modal__title">
          Get In Touch
        </h2>
        <p className="contact-modal__desc">
          To speak with us, please fill out the form below.
        </p>
        <form
          className="contact-modal__form"
          onSubmit={onSubmit}
        >
          <label className="contact-modal__label">
            Company Name <span className="contact-modal__required">*</span>
            <input
              type="text"
              name="user_name"
              required
              maxLength={NAME_MAX_LENGTH}
              autoComplete="organization"
              className="contact-modal__input"
              disabled={isSubmitting}
              placeholder=" "
            />
          </label>
          <label className="contact-modal__label">
            Email Address <span className="contact-modal__required">*</span>
            <input
              type="email"
              name="user_email"
              required
              autoComplete="email"
              className="contact-modal__input"
              disabled={isSubmitting}
              placeholder=" "
            />
          </label>
          <label className="contact-modal__label">
            Tell us about your vision <span className="contact-modal__required">*</span>
            <textarea
              name="message"
              required
              rows={3}
              maxLength={MESSAGE_MAX_LENGTH}
              className="contact-modal__input contact-modal__textarea"
              disabled={isSubmitting}
              placeholder=" "
            />
          </label>
          <button
            type="submit"
            className="contact-modal__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Submit Request'}
            <span className="contact-modal__arrow">→</span>
          </button>
        </form>
        {statusMessage && (
          <p className="contact-modal__status">{statusMessage}</p>
        )}
      </div>
    </div>
  )
}
