export function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <span className="scroll-indicator__label">Scroll down</span>
      <div className="scroll-indicator__wave">
        <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 12 Q30 2 60 12 T120 12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="scroll-indicator__dot">0</span>
      </div>
      <span className="scroll-indicator__label">to see projects</span>
    </div>
  )
}
