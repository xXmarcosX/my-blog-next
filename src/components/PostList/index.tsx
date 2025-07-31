import { postRepository } from "@/repositories/post"
import PostCoverImage from "../PostCoverImage"
import PostHeading from "../PostHeading"

export default async function PostList() {
  const posts = await postRepository.findAll()

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 font-bold w-full">
      {posts.map(post => {
        const postLink = `/post/${post.slug}`

        return <div key={post.id} className="group overflow-hidden">
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
              className: 'rounded-md'
            }}
          />

          <div className="flex flex-col gap-2 mt-4">
            <time dateTime="2025-07-29" className="text-slate-600 dark:text-gray-400 text-sm/tight font-normal">29/07/2025 15:15</time>

            <div>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
            </div>

            <div>
              <p className="font-normal sm:text-sm">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
