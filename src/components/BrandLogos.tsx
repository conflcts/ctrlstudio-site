const BRANDS = [
  '15 Degrees',
  'AlphaWave',
  'Biosynthesia',
  'Boltshift',
  'Clandestine',
  'Codecraft_',
  'ennLabs',
  'GlobalBank',
]

export function BrandLogos() {
  return (
    <div className="brand-logos brand-logos--strip">
      {BRANDS.map((name) => (
        <span key={name} className="brand-logos__name">{name}</span>
      ))}
    </div>
  )
}
