'use client'

import { uploadImageAction } from "@/app/actions/upload/upload-image-action"
import Button from "@/components/Button"
import SpinLoader from "@/components/SpinLoader"
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants/constants"
import { url } from "inspector"
import { useRef, useState, useTransition } from "react"
import { LuImageUp } from "react-icons/lu"
import { toast } from "react-toastify"

type ImageUploaderProps = {
  disabled?: boolean
}

export function ImageUploader({disabled = false}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isUploading, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState('')

  const handleClick = () => {
    if (!fileInputRef.current) return

    fileInputRef.current.click()
  }

  const handleChange = () => {
    if (!fileInputRef.current) {
      setImageUrl('')
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImageUrl('')
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      toast.error(`Imagem enviada é muito grande. Max: ${IMAGE_UPLOAD_MAX_SIZE}k`)

      fileInput.value = ''
      setImageUrl('')

      return
    }

    const formData = new FormData()
    formData.append('file', file)

    startTransition(async () => {
      const result = await uploadImageAction(formData)

      if (result.error) {
        toast.error(`Erro: ${result.error}`)
        fileInput.value = ''
        setImageUrl('')

        return
      }

      toast.success(`Imagem enviada. Url`)
      setImageUrl(result.url)
    })

    fileInput.value = ''
  }

  return (
    <>
      <div className="flex flex-col gap-4 py-4">

        <Button
          type="button"
          className="self-start flex gap-4 w-44 min-w-44"
          onClick={handleClick}
          disabled={isUploading || disabled}
        >

          {isUploading ? (
            <SpinLoader />
          ) :
            <>
              <LuImageUp /> Enviar imagem
            </>
          }
        </Button>

        {imageUrl && (
          <div className="flex flex-col gap-4">
            <p><b>URL:</b> {imageUrl}</p>

            <img src={imageUrl} className="rounded-lg h-80 w-80" />
          </div>
        )}

        <input
          type="file"
          name="file"
          id=""
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          disabled={isUploading || disabled}
        />
      </div>
    </>
  )
}