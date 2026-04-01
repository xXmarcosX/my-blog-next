import { PostModel } from "@/models/post/post-model"
import PostCoverImage from "../PostCoverImage"
import PostSummary from "../PostSummary"
import { findAllPublicPosts } from "@/lib/post/queries"
import clsx from "clsx"
import { Suspense } from "react"
import SpinLoader from "../SpinLoader"
import { cacheLife } from "next/cache"

async function CachedContent({ posts }: { posts: PostModel[] }) {
  'use cache'

  const imageContainerClasses = clsx(
    'group',
    'overflow-hidden',
    'rounded-2xl w-full',
    'shadow-lg shadow-slate-500/50 dark:shadow-stone-500/50',
    'dark:bg-neutral-950'
  )

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 font-bold w-full">
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`

        return <div key={post.id} className={imageContainerClasses}>
          <div className="overflow-hidden">
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}

              imageProps={{
                alt: `${post.title}`,
                src: `${post.coverImageUrl}`,
                width: 0,
                height: 150,
                sizes: '100vw',
                priority: true,
                title: `${post.title}`,
              }}
            />
          </div>

          <PostSummary
            postHeading="h2"
            postLink={postLink}
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </div>
      })}
    </div>
  )
}

export default async function PostList() {
  const posts = await findAllPublicPosts()

  return (
    < Suspense fallback={< SpinLoader />}>
      <CachedContent posts={posts} />
    </Suspense >
  )
}
