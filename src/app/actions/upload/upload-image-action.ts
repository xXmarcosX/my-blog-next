'use server'

import { IMAGE_SERVER_URL, IMAGE_UPLOAD_DIRECTORY, IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants/constants"
import { mkdir, writeFile } from "fs/promises"
import { extname, resolve } from "path"

type UploadImageActionResult = {
  url: string,
  error: string
}

export async function uploadImageAction(formData: FormData): Promise<UploadImageActionResult> {
  const makeResult = ({url = '', error = ''}) => {
    return {url, error}
  }

  if (!(formData instanceof FormData)) {
    return makeResult({error: 'Dados inválidos'})
  }

  const file = formData.get('file')

  if (!(file instanceof File)) {
    return makeResult({error: 'Dados inválidos'})
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({error: 'Arquivo muito grande'})
  }

  if (!file.type.startsWith('image')) {
    return makeResult({error: 'Dados inválidos'})
  }

  const imageExtension = extname(file.name)
  const uniqueImageName = `${Date.now()}${imageExtension}`

  const uploadsFullPath = resolve(
    process.cwd(), 
    'public', 
    IMAGE_UPLOAD_DIRECTORY
  )

  await mkdir(uploadsFullPath, {recursive: true})

  const fileArrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(fileArrayBuffer)

  const fileFullPath = resolve(uploadsFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer)

  const url = `/uploads/${uniqueImageName}`

  // arquivo enviado
  return makeResult({url: url})
}