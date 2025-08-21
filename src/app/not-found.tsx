import clsx from "clsx";

export default function NotFoundPage() {
  const classes = clsx(
    'min-h-[320px]',
    'bg-slate-900 text-slate-100 dark:bg-gray-800',
    'mb-16 mt-8',
    'p-8',
    'rounded-xl',
    'flex items-center justify-center text-center',
  )

  return (
    <>
      <title>Página não encontrada</title>
      
      <div className={classes}>
        <div className="flex flex-col gap-16">
          <h1 className="text-8xl font-bold">404</h1>
          <p>Erro 404 - A página que você está tentando acessar não existe neste site.</p>
        </div>
      </div>
    </>
  )
}
