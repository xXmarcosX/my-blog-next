import ErrorMessage from "@/components/ErrorMessage";
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
      <ErrorMessage
        pageTitle="Página não encontrada"
        contentTitle="404"
        content="Erro 404 - Página não encontrada"
      />

    </>
  )
}
