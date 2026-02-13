import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  children,
  as = 'button',
  href,
  onClick,
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = 'btn'
  const variantClass = variant === 'primary' ? 'btn--primary' : 'btn--secondary'
  const classes = `${baseClass} ${variantClass} ${className}`.trim()

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} onClick={onClick} role="button">
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
