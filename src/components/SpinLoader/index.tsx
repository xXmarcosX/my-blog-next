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
    'border-5 border-t-transparent border-slate-900',
    'rounded-full',
    'animate-spin'
  )

  return (
    <div className={classes}>
      <div className={spinerClasses}></div>
    </div>
  )
}
