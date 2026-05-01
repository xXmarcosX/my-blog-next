import { ManagePostForm } from "@/components/Admin/ManagePostForm"
import SpinLoader from "@/components/SpinLoader"
import { makePublicPostFromDb } from "@/dto/post/dto"
import { findPostByIdCachedAdmin } from "@/lib/post/queries/admin"
import { notFound } from "next/navigation"
import { Suspense } from "react"

type AdminPostIdParams = {
  params: Promise<{ id: string }>
}

async function CachedContent({ id }: { id: string }) {
  'use cache'

  const post = await findPostByIdCachedAdmin(id).catch()

  if (!post) notFound()

  const publicPost = makePublicPostFromDb(post)

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-extrabold self-center">EDITAR POST</h1>
      <ManagePostForm mode='update' publicPost={publicPost}/>
    </div>
  )
}

async function ContentResolver({ params }: AdminPostIdParams) {
  const { id } = await params

  return <CachedContent id={id} />
}

export default async function AdmPost({ params }: AdminPostIdParams) {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <ContentResolver params={params} />
      </Suspense>
    </>
  )
}
