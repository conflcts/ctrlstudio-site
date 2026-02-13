export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="section section--who-we-are">
      <span className="who-we-are__label">[Who we are]</span>
      <div className="who-we-are__heading-row">
        <h2 className="who-we-are__heading">
          <span className="who-we-are__heading-brand">Ctrl</span> is a full service two person design team based in{' '}
          <span className="who-we-are__heading-place">New York, and Vancouver, Canada.</span> We&apos;re a two person team doing what we love: creating great design for businesses that need to move fast.
        </h2>
        <img src="/globe-logo.png" alt="Ctrl" className="who-we-are__logo" />
      </div>
      <div className="who-we-are__columns">
        <p className="who-we-are__para">
          Founded in 2020, we&apos;ve grown carefully and intentionally. We&apos;ve turned down venture capital, avoided the hire-fast mentality, and said no to projects that didn&apos;t align with our values. This deliberate approach has allowed us to build lasting relationships with clients who value craft as much as we do.
        </p>
        <p className="who-we-are__para">
          We&apos;re two people who genuinely enjoy working together. Martin and Sebastian lead creative direction and strategy. No egos, no drama—just a shared commitment to doing work we&apos;re proud of. When you work with us, you work directly with us.
        </p>
      </div>
      <footer className="who-we-are__footer">
        <span className="who-we-are__founded">Founded in New York, and Vancouver, Canada.</span>
        <span className="who-we-are__year" aria-hidden>2020</span>
      </footer>
    </section>
  )
}
