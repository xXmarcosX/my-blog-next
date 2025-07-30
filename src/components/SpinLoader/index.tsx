import clsx from "clsx"

type SpinLoaderProps = {
  containerClasses?: string
}

export default function SpinLoader({ containerClasses = '' }: SpinLoaderProps) {
  const classes = clsx(
    'flex',
    'items-center',
    'justify-center',
    containerClasses
  )

  const spinerClasses = clsx('w-10 h-10',
    'border-4 border-t-transparent dark:border-t-transparent border-slate-900 dark:border-amber-50',
    'rounded-full',
    'animate-spin'
  )

  return (
    <div className={classes}>
      <div className={spinerClasses}></div>
    </div>
  )
}
