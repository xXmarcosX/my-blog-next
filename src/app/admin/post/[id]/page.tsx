import SpinLoader from "@/components/SpinLoader"
import { Suspense } from "react"

type AdminPostIdParams = {
  params: Promise<{ id: string }>
}

async function CachedContent({ id }: { id: string }) {
  'use cache'

  return (
    <div className='py-16 text-xl flex justify-center'>
      <p>Admin Post Page | params: {id}</p>
    </div>
  )
}

async function ContentResolver({ params }: AdminPostIdParams) {
  const { id } = await params

  return <CachedContent id={id}/>
}

export default async function AdmPost({ params }: AdminPostIdParams) {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <ContentResolver params={params}/>
      </Suspense>
    </>
  )
}
