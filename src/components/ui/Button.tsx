import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-white'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type Props = ButtonProps | AnchorProps

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-[0.9rem] gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-[var(--magenta-bold)] to-[var(--magenta-deep)] text-white shadow-[0_4px_20px_rgba(209,0,113,0.3)] hover:from-[var(--magenta-neon)] hover:to-[var(--magenta-bold)] hover:shadow-[0_8px_28px_rgba(209,0,113,0.42)] hover:-translate-y-0.5',
  secondary:
    'bg-transparent text-[var(--emerald)] border-2 border-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-white hover:shadow-[0_8px_24px_rgba(31,129,36,0.3)] hover:-translate-y-0.5',
  ghost:
    'bg-[rgba(209,0,113,0.06)] text-[var(--magenta-bold)] border border-[rgba(209,0,113,0.2)] hover:bg-[rgba(209,0,113,0.1)] hover:border-[rgba(209,0,113,0.35)] hover:text-[var(--magenta-deep)]',
  'outline-white':
    'bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-[var(--magenta-bold)] hover:-translate-y-0.5',
}

function classNames(
  variant: Variant,
  size: Size,
  fullWidth: boolean,
  extraClass?: string
): string {
  return [
    'inline-flex items-center justify-center font-[var(--font-heading)] font-semibold rounded-full transition-all duration-200 cursor-pointer no-underline',
    SIZE_CLASSES[size],
    VARIANT_STYLES[variant],
    fullWidth ? 'w-full' : '',
    extraClass ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  children,
  href,
  className,
  ...rest
}: Props) {
  const cls = classNames(variant, size, fullWidth, className as string)

  const inner = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  )

  if (href !== undefined) {
    const { ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={cls} {...anchorRest}>
        {inner}
      </a>
    )
  }

  const { ...btnRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={cls} {...btnRest}>
      {inner}
    </button>
  )
}
