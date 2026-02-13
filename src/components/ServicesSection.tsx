/**
 * Services section – "What We Offer" with 4 cards and tags (matches reference design)
 */

const services = [
  {
    id: 'product-design',
    image: '/services-product-design.png',
    imageAlt: 'Hands holding tablet',
    icon: 'package',
    title: 'Product Design',
    description:
      'We craft intuitive, user-centric digital products that drive engagement and conversion. We design for real-world.',
  },
  {
    id: 'brand-identity',
    image: null as string | null,
    icon: 'palette',
    title: 'Brand Identity Design',
    description:
      'Your brand is more than a logo. We build complete brand systems that express your vision, values, and voice - helping you stand out.',
  },
  {
    id: 'marketing-seo',
    image: null as string | null,
    icon: 'trending',
    title: 'Marketing & SEO',
    description:
      'We align creative storytelling with smart strategy. From content to technical SEO, we help you rank higher, and grow organically.',
  },
  {
    id: 'ads-others',
    image: '/services-ads-others.png',
    imageAlt: 'Street billboard',
    icon: 'target',
    title: 'Ads & Others',
    description:
      "Maximize your ROI with targeted precision-ad campaigns. Whether it's Google, Meta, or LinkedIn.",
  },
]

const tags = [
  'UI/UX',
  'Brand Identity',
  'Creative Direction',
  'Web Development',
  'Visual Content Creation',
  'Packaging Design',
  'Art Direction',
  'Design Consulting',
  'Logo Design',
]

function Icon({ name }: { name: string }) {
  const className = 'services-card__icon-svg'
  if (name === 'package') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  }
  if (name === 'palette') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" />
        <circle cx="17.5" cy="10.5" r="0.5" />
        <circle cx="8.5" cy="7.5" r="0.5" />
        <circle cx="6.5" cy="12.5" r="0.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.648 0-.437-.18-.835-.437-1.125.29-.256.688-.437 1.125-.437.902 0 1.648-.722 1.648-1.648C22 13.107 17.893 2 12 2z" />
      </svg>
    )
  }
  if (name === 'trending') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
  if (name === 'target') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
  return null
}

export function ServicesSection() {
  return (
    <section id="services" className="section section--services-new">
      <div className="services-new__header">
        <span className="services-new__label">// Services</span>
        <h2 className="services-new__title">
          What We <span className="services-new__title-light">Offer</span><span className="services-new__blink">.</span>
        </h2>
        <p className="services-new__desc">
          Our services blend strategy and creativity to deliver impact.
        </p>
      </div>

      <div className="services-new__grid">
        <div className="services-new__row">
          {services.slice(0, 2).map((service) => (
            <article
              key={service.id}
              className={`services-card ${service.id === 'product-design' ? 'services-card--wide' : ''}`}
            >
              <div className="services-card__inner">
                {service.image ? (
                  <div className="services-card__image-wrap">
                    <img
                      src={service.image}
                      alt={service.imageAlt ?? ''}
                      className="services-card__thumb"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="services-card__content">
                  <span className="services-card__icon">
                    <Icon name={service.icon} />
                  </span>
                  <h3 className="services-card__title">{service.title}</h3>
                  <p className="services-card__description">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="services-new__row">
          {services.slice(2, 4).map((service) => (
            <article
              key={service.id}
              className={`services-card ${service.id === 'ads-others' ? 'services-card--wide' : ''}`}
            >
              <div className="services-card__inner">
                {service.image ? (
                  <div className="services-card__image-wrap">
                    <img
                      src={service.image}
                      alt={service.imageAlt ?? ''}
                      className="services-card__thumb"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="services-card__content">
                  <span className="services-card__icon">
                    <Icon name={service.icon} />
                  </span>
                  <h3 className="services-card__title">{service.title}</h3>
                  <p className="services-card__description">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="services-new__tags-wrap" aria-hidden>
        <div className="services-new__tags-inner">
          {[...tags, ...tags].map((tag, i) => (
            <span key={`${tag}-${i}`} className="services-new__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
