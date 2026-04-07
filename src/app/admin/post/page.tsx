import PostList from "@/components/Admin/PostList"
import SpinLoader from "@/components/SpinLoader"
import WarningDialog from "@/components/WarningDialog"
import { findAllPostsAdmin } from "@/lib/post/queries/admin"
import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import clsx from "clsx"
import { cacheLife, cacheTag } from "next/cache"
import { Suspense } from "react"

async function CachedContent({ posts }: { posts: PostModel[] }) {
  'use cache'
  cacheTag('posts')
  cacheLife('max')

  const mainDivClasses = clsx(
    'flex flex-col gap-6',
    'text-xl', 'bg-slate-300',
    'text-slate-900',
    'dark:bg-gray-800',
    'dark:text-white',
    'w-auto rounded-3xl',
    'shadow-lg shadow-xl/20 dark:shadow-stone-500/50',
    'p-6',
    'pb-9',
  )

  return (
    <div className={mainDivClasses}>
      <PostList posts={posts} />
    </div>
  )
}

export default async function AdmPost() {
  const posts = await findAllPostsAdmin()

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <CachedContent posts={posts} />
      </Suspense>
    </>
  )
}
