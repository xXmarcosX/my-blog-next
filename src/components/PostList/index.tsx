import { postRepository } from "@/repositories/post"
import PostCoverImage from "../PostCoverImage"
import PostSummary from "../PostSummary"
import { findAllPublicPosts } from "@/lib/post/queries"

export default async function PostList() {
  const posts = await findAllPublicPosts()

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 font-bold w-full">
      {posts.slice(1).map(post => {
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
