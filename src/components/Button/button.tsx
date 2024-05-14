import bebasneueFont from '@/fonts/bebasneue'
import { cn } from '@/lib'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'green' | 'orange'
  className?: string
}

const Button = ({ children, variant = 'green', className }: ButtonProps) => {
  return (
    <button
      className={cn(
        'text-white px-6 py-3 duration-200 hover:opacity-80 rounded-lg rounded-tr-none rounded-bl-none text-xl',
        bebasneueFont,
        variant === 'green' ? 'bg-green' : 'bg-orange',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
