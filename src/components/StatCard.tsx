interface StatCardProps {
  value: string
  description: string
  icon?: 'chart' | 'bolt' | 'globe' | 'expand'
}

export function StatCard({ value, description, icon = 'expand' }: StatCardProps) {
  return (
    <article className="stat-card">
      <span className="stat-card__expand" aria-hidden>↗</span>
      <div className="stat-card__content">
        {icon === 'chart' && (
          <div className="stat-card__chart" aria-hidden>
            <span /><span /><span /><span /><span />
          </div>
        )}
        <span className="stat-card__value">{value}</span>
        <p className="stat-card__description">{description}</p>
      </div>
      {icon === 'bolt' && (
        <div className="stat-card__icon stat-card__icon--bolt" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="stat-card__icon-rings" />
        </div>
      )}
      {icon === 'globe' && (
        <div className="stat-card__icon stat-card__icon--globe" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      )}
    </article>
  )
}
