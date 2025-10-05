import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle: string,
  contentTitle: string,
  content: React.ReactNode
}

export default function ErrorMessage({pageTitle, contentTitle, content}: ErrorMessageProps) {
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
      <title>{pageTitle}</title>
      
      <div className={classes}>
        <div className="flex flex-col gap-16">
          <h1 className="text-8xl font-bold">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  )
}
