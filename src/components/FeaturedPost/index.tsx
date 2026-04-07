import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import ErrorMessage from "../ErrorMessage";

export default async function FeaturedPost() {
  const posts = await findAllPublicPostsCached()

  if (posts.length === 0) return <ErrorMessage content="Nenhum post encontrado" contentTitle="Ops" pageTitle="Ops" />

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
