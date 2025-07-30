type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:text-slate-100 dark:bg-neutral-900">
      <div className="max-w-screen-lg mx-auto px-8">
        {children}
      </div>
    </div>
  )
}
