interface HeroSectionProps {
  onGetInTouch?: () => void
}

export function HeroSection({ onGetInTouch: _onGetInTouch }: HeroSectionProps) {
  return (
    <section className="hero hero--mugen" aria-labelledby="hero-title">
      <div className="hero__title-block">
        <h1 id="hero-title" className="hero__title hero__title--split hero__title--mugen">
          <span className="hero__title-line hero__title-line--primary">
            Ctrl
            <span className="hero__status">
              <span className="hero__status-dot" aria-hidden />
              <span className="hero__status-text">available for work</span>
            </span>
          </span>
          <span className="hero__title-line hero__title-line--offset hero__title-line--secondary">Studio</span>
        </h1>
        <span className="hero__since">© Since — 2020</span>
      </div>
    </section>
  )
}
