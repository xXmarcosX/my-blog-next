import { findAllPublicPosts } from "@/lib/post/queries";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import PostSummary from "../PostSummary";

export default async function FeaturedPost() {
  const posts = await findAllPublicPosts()
  const post = posts[0]
  const slug = post.slug
  const postLink = `/post/${slug}`

  return (
    <>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group w-full sm:h-96">

        <PostCoverImage linkProps={{
          href: postLink
        }}

          imageProps={{
            width: 0,
            height: 96,
            alt: 'titulo',
            src: post.coverImageUrl,
            sizes: '100vw',
            priority: true,
            className: 'h-full'
          }}
        />

        <PostSummary
          createdAt={post.createdAt}
          excerpt={post.excerpt}
          postHeading="h1"
          postLink={`/post/${post.slug}`}
          title={post.title}
        />
      </section>
    </>
  )
}
