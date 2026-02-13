interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span className="service-card__number">{number}</span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </article>
  )
}
