import { ButtonType } from "@/types/button-type"
import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode,
  variant?: ButtonType,
  size?: 'sm' | 'md' | 'lg'
} & React.ComponentProps<'button'>

export default function Button({ children, variant = 'default', size = 'md', className, ...props }: ButtonProps) {
  const buttonVariants = {
    default: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:from-cyan-400 hover:to-blue-400 focus:ring-cyan-500',
    ghost: 'bg-transparent dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-600 hover:shadow-[0_0_15px_rgba(156,163,175,0.3)] focus:ring-gray-500',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] hover:from-red-400 hover:to-pink-400 focus:ring-red-500'
  }
  
  const buttonSizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const btnClasses = clsx(
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-gray-900',
    buttonVariants[variant],
    buttonSizes[size],
    className
  )

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  )
}