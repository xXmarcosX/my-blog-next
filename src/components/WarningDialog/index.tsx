'use client'

import { WarningType } from "@/types/warning-type"
import { FaCheck, FaCheckCircle } from "react-icons/fa"
import { IoIosWarning } from "react-icons/io"
import { MdErrorOutline } from "react-icons/md"

type WarningDialogProps = {
  warningType: WarningType,
  dialogContent: {
    title: string,
    content: string
  },
  isVisible: boolean
  onConfirm: () => void
}

export default function WarningDialog({
  warningType,
  onConfirm,
  dialogContent,
  isVisible = false }: WarningDialogProps) {

  if (!isVisible) return null

  const iconsSize = 120

  const warningDialogIcon = {
    success: <FaCheckCircle color="green" size={iconsSize} />,
    fail: <MdErrorOutline color="red" size={iconsSize} />,
    warning: <IoIosWarning color="yellow" size={iconsSize} />
  }

  return (
    <>
      <div className="fixed z-50 inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center">
        <div className="bg-slate-100 dark:bg-gray-800 rounded-lg w-2xl mx-6 flex flex-col gap-8 p-6 shadow-lg shadow-black text-center" onClick={e => e.stopPropagation()}>
          <h3 className="text-3xl font-bold">{dialogContent.title}</h3>

          <div className="flex items-center justify-center">
            {warningDialogIcon[warningType]}
          </div>

          <p>{dialogContent.content}</p>
          <div className="flex justify-center items center">
            <button
              className='bg-blue-600 hover:bg-blue-700 transititon duration-200 cursor-pointer p-2 rounded-md text-slate-950 w-24'
              onClick={onConfirm}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  )
}