'use client'

import Button from "../Button";

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
            <Button
              variant="danger"
              className="w-24"
              autoFocus
              onClick={onCancel}
              disabled={disabled}
            >Cancelar</Button>
            <Button
              variant="default"
              className="w-24"
              onClick={onConfirm}
              disabled={disabled}
            >OK</Button>
          </div>
        </div>
      </div>
    </>
  )
}