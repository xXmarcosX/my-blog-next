import SpinLoader from "@/components/SpinLoader"
import { findAllPostsAdmin } from "@/lib/post/queries/admin"
import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Home Admin'
}

async function CachedContent({ posts }: { posts: PostModel[] }) {
  'use cache'

  return (
    <>
      <div className='flex justify-center text-6xl flex-col items-center'>
        <p>Admin Home Page</p>
      
        <br />

        <div className="flex justify-center items-center flex-wrap grow">
          {posts.map((post) => {
            return <p key={post.id} className="text-2xl">Titulo: {post.title}</p>
          })}
        </div>
      </div>
    </>
  )
}

export default async function page() {
  const posts = await findAllPostsAdmin()

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <CachedContent posts={posts} />
      </Suspense>
    </>
  )
}
