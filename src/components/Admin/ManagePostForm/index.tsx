'use client'

import Button from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckBox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useActionState, useEffect, useState } from "react";
import { ImageUploader } from "../ImageUploader";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/app/actions/post/create-post-action";
import { toast } from "react-toastify";
import { updatePostAction } from "@/app/actions/post/update-post-action";
import { useRouter, useSearchParams } from "next/navigation";

type ManagePostFormUpdateProps = {
  mode: 'update',
  publicPost: PublicPost
}

type ManagePostFormCreateProps = {
  mode: 'create'
}

type ManagePostFormProps = ManagePostFormCreateProps | ManagePostFormUpdateProps

export function ManagePostForm(props: ManagePostFormProps) {
  const {mode} = props
  const searchParams = useSearchParams()
  const created = searchParams.get('created')
  const router = useRouter()

  let post;
  if (mode === 'update') post = props.publicPost

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction
  }

  const initialState = {
    formState: makePartialPublicPost(post),
    errors: []
  }

  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState
  )

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss()
      state.errors.forEach(error => toast.error(error))
    }
  }, [state.errors])
  
  useEffect(() => {
    if (state.success) {
      toast.dismiss()
      toast.success('Post atualizado com sucesso!.')
      state.success = false
    }
  }, [state.success])
  
  useEffect(() => {
    if (created === '1') {
      toast.dismiss()
      toast.success('Post Criado com sucesso!.')

      const url = new URL(window.location.href)
      url.searchParams.delete('created')
      
      router.replace(url.toString())
    }
  }, [created, router])

  const { formState } = state
  const [value, setValue] = useState(post?.content || '')

  return (
    <form action={action} className="mb-16">
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          id='id'
          placeholder='ID gerado automaticamente'
          type='text'
          defaultValue={formState.id}
          readOnly
          disabled={isPending}
        />

        <InputText
          labelText='Slug'
          name='slug'
          id='slug'
          placeholder='Slug gerada automaticamente'
          type='text'
          defaultValue={formState.slug}
          readOnly
          disabled={isPending}
        />

        <InputText
          labelText='Autor'
          name='author'
          id='author'
          placeholder='Digite o nome do autor'
          type='text'
          defaultValue={formState.author}
          disabled={isPending}
        />

        <InputText
          labelText='Título'
          name='title'
          id='title'
          placeholder='Digite o título'
          type='text'
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          labelText='Excercto'
          name='excerpt'
          id='excerpt'
          placeholder='Digite o Resumo'
          type='text'
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText='Conteúdo'
          disabled={isPending}
          textAreaName='content'
          id='content'
          value={value}
          setValue={setValue}
        />

        <ImageUploader disabled={isPending}/>

        <InputText
          readOnly={post ? true : false}
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          placeholder='Digite a url da imagem'
          type='text'
          id='urlImagemcapa'
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckBox
          labelText='Publicar?'
          name='published'
          type='checkbox'
          id='publicar'
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className='mt-4'>
          <Button type='submit' disabled={isPending}>Enviar Post</Button>
        </div>
      </div>
    </form >
  )
}