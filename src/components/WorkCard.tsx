interface WorkCardProps {
  image: string
  imageAlt?: string
  title: string
}

export function WorkCard({ image, imageAlt = '', title }: WorkCardProps) {
  return (
    <article className="work-card">
      <div className="work-card__image">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <h3 className="work-card__title">{title}</h3>
    </article>
  )
}
