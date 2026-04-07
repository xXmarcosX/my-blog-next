'use client'

import clsx from "clsx";

type DialogProps = {
  isVisible?: boolean,
  title: string,
  content: React.ReactNode,
  onConfirm: () => void,
  onCancel: () => void,
  disabled: boolean
}

export default function Dialog({ isVisible = false, title, content, onConfirm, onCancel, disabled }: DialogProps) {
  if (!isVisible) return null

  return (
    <>
      <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center" onClick={onCancel}>

        <div className="bg-slate-100 dark:bg-gray-800 rounded-lg max-w-2xl mx-6 flex flex-col gap-8 p-6 shadow-lg shadow-black text-center" onClick={e => e.stopPropagation()}>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{content}</p>
          <div className="flex justify-between items-center">
            <button className={clsx(
              'bg-red-600 hover:bg-red-700 transititon duration-200 cursor-pointer p-2 rounded-md text-slate-950 w-24',
              'flex items-center justify-center',
              'disabled:bg-gray-400 disabled:cursor-not-allowed'
            )}
              autoFocus
              onClick={onCancel}
              disabled={disabled}
            >Cancelar</button>
            <button className={clsx(
              'bg-blue-600 hover:bg-blue-700 transititon duration-200 cursor-pointer p-2 rounded-md text-slate-950 w-24',
              'flex items-center justify-center',
              'disabled:bg-gray-400 disabled:cursor-not-allowed'
            )}
              onClick={onConfirm}
              disabled={disabled}
            >OK</button>
          </div>
        </div>
      </div>
    </>
  )
}