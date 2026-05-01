'use server'

import { makePartialPublicPost, PublicPost } from "@/dto/post/dto"
import { PostCreateSchema } from "@/lib/post/validations/validatesPost"
import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import { getZodErrorMessages } from "@/utils/get-zod-error-messages"
import { makeSlugFromText } from "@/utils/make-slug-from-text"
import { revalidateTag, updateTag } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from 'uuid'

type CreatePostActionState = {
  formState: PublicPost,
  errors: string[],
  success?: boolean
}

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData
): Promise<CreatePostActionState> {

  const title = formData.get('title')?.toString() || ''

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos.']
    }
  }

  const formDataObj = Object.fromEntries(formData.entries())
  const zodParsedObj = PostCreateSchema.safeParse(formDataObj)

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error)

    return {
      errors: errors,
      formState: makePartialPublicPost(formDataObj)
    }
  }

  const validPostData = zodParsedObj.data
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    id: uuidv4(),
    slug: makeSlugFromText(validPostData.title),
    updatedAt: new Date().toISOString()
  }

  try {
    await postRepository.create(newPost)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: newPost,
        errors: [e.message]
      }
    }

    return {
      formState: newPost,
      errors: ['Error Desconhecido']
    }
  }

  updateTag('posts')
  redirect(`/admin/post/${newPost.id}?created=1`)
}