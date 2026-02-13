interface HeroSectionProps {
  onGetInTouch?: () => void
}

export function HeroSection({ onGetInTouch: _onGetInTouch }: HeroSectionProps) {
  return (
    <section className="hero hero--mugen" aria-labelledby="hero-title">
      <div className="hero__title-block">
        <span className="hero__status hero__status--above">
          <span className="hero__status-dot" aria-hidden />
          <span className="hero__status-text">available for work</span>
        </span>
        <h1 id="hero-title" className="hero__title hero__title--mugen">
          CtrlStudio
        </h1>
        <span className="hero__since">© Since — 2020</span>
      </div>
    </section>
  )
}
