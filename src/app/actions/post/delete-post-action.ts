'use server'

import { postRepository } from "@/repositories/post"
import { revalidateTag, updateTag } from "next/cache"

export async function deletePostAction(id: string) {
  if (!id || typeof id !== 'string') {
    return {
      error: 'Dados inválidos'
    }
  }

  const post = await postRepository.findById(id).catch(() => undefined)

  if (!post) {
    return {
      error: 'Post não existe'
    }
  }

  try {
    await postRepository.delete(id)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message
      }
    }

    return {
      error: 'Erro Desconhecido'
    }
  }

  updateTag('posts')

  return {
    error: ''
  }
}