type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:text-slate-100 dark:bg-neutral-900 border-amber-50 w-full">
      <div className="max-w-screen px-8 lg:px-38 mx-auto">
        {children}
      </div>
    </div>
  )
}
