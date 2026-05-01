'use client'

import { deletePostAction } from "@/app/actions/post/delete-post-action"
import Button from "@/components/Button"
import Dialog from "@/components/Dialog"
import WarningDialog from "@/components/WarningDialog"
import { WarningType } from "@/types/warning-type"
import { useState, useTransition } from "react"
import { toast } from "react-toastify"

type DeletePostButtonProps = {
  id: string,
  title: string
}

export default function DeletePostButton({ id, title }: DeletePostButtonProps) {

  const [isPending, startTransition] = useTransition()
  const [showDialog, setShowDialog] = useState(false)
  const [showWarningDialog, setShowWarningDialog] = useState(false)
  const [warningDialogContent, setWarningDialogContent] = useState<{ title: string, content: string }>({
    title: '',
    content: ''
  })
  const [warningType, setWarningType] = useState<WarningType>('warning')

  const handleClick = async () => {
    setShowDialog(true)
  }

  const handleConfirm = () => {
    toast.dismiss()

    startTransition(async () => {
      const result = await deletePostAction(id)
      
      setShowDialog(false)

      if (result.error) {
        toast.error(result.error)
        return
      }

      toast.success('Post apagado com sucesso')
    })
  }

  return (
    <>
      <Button 
        variant="danger" 
        className="w-fit rounded-xl lg:mt-0 self-start lg:self-auto ml-9 lg:ml-0 text-sm" 
        onClick={handleClick} 
        disabled={isPending}
      >
        Excluir
      </Button>
      {showDialog &&
        <Dialog
          isVisible={showDialog}
          title={'Apagar post?'}
          content={`Tem certeza que deseja apagar o post: ${title}?`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      }
      {showWarningDialog &&
        <WarningDialog
          warningType={warningType}
          dialogContent={warningDialogContent}
          isVisible={showWarningDialog}
          onConfirm={() => setShowWarningDialog(false)}
        />
      }
    </>
  )
}
