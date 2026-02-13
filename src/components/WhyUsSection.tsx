export function WhyUsSection() {
  return (
    <section id="why-us" className="section section--why-us section--why-us-mugen">
      {/* Upper half: stats grid */}
      <div className="why-us__grid">
        {/* Left: chart card */}
        <article className="stat-card stat-card--chart">
          <span className="stat-card__expand" aria-hidden>↗</span>
          <div className="stat-card__content">
            <div className="stat-card__chart stat-card__chart--years" aria-hidden>
              <span data-year="2020" />
              <span data-year="2022" />
              <span data-year="2024" />
              <span data-year="2026" />
              <span data-year="2028" />
            </div>
            <span className="stat-card__value">50M +</span>
            <p className="stat-card__description">Revenue generated for our clients.</p>
          </div>
        </article>

        {/* Middle: two stacked cards */}
        <div className="why-us__middle">
          <article className="stat-card stat-card--bolt">
            <span className="stat-card__value">3x</span>
            <p className="stat-card__description">Faster than other agencies.</p>
            <div className="stat-card__icon stat-card__icon--bolt" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="stat-card__icon-rings" />
            </div>
          </article>
          <article className="stat-card stat-card--globe">
            <span className="stat-card__value">200 +</span>
            <p className="stat-card__description">Projects shipped worldwide, helping our clients achieve their goals.</p>
            <div className="stat-card__icon stat-card__icon--globe" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </article>
        </div>

        {/* Right: large image card with Happy clients overlay */}
        <article className="stat-card stat-card--hero stat-card--image">
          <div className="stat-card__hero-bg stat-card__hero-bg--client-icon" />
          <span className="stat-card__badge">
              <img src="/globe-logo.png" alt="Ctrl" className="stat-card__badge-logo" width={48} height={48} loading="lazy" />
            </span>
          <div className="stat-card__rating">
            <span className="stat-card__rating-stars">★★★★☆</span>
            <span className="stat-card__rating-value">4.9 / 5</span>
          </div>
          <div className="stat-card__hero-footer">
            <span className="stat-card__value stat-card__value--large">100 +</span>
            <p className="stat-card__description">Happy clients and counting.</p>
          </div>
        </article>
      </div>

      {/* Lower half: Fast to launch + feature blocks + CTA */}
      <div className="why-us__features">
        <div className="why-us__features-heading">
          <h2 className="why-us__headline">Fast to launch.</h2>
          <h2 className="why-us__headline">Easy to scale.</h2>
        </div>
        <div className="why-us__features-grid">
          <div className="why-us__feature">
            <span className="why-us__feature-icon" aria-hidden>⌁</span>
            <h3 className="why-us__feature-title">Speed without sacrifice</h3>
            <p className="why-us__feature-desc">
              We ship in days, not months. Our streamlined process cuts through the typical agency theater while maintaining the craft and quality you expect.
            </p>
          </div>
          <div className="why-us__feature">
            <span className="why-us__feature-icon" aria-hidden>∿</span>
            <h3 className="why-us__feature-title">Flexible engagement</h3>
            <p className="why-us__feature-desc">
              Choose monthly retainers for ongoing work or project-based engagements for specific needs. Scale up or down as your business evolves.
            </p>
          </div>
          <div className="why-us__feature">
            <span className="why-us__feature-icon" aria-hidden>◇</span>
            <h3 className="why-us__feature-title">Senior talent</h3>
            <p className="why-us__feature-desc">
              Work with experienced designers who integrate with your team. No junior handoffs, no endless revisions—just high-quality output.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
