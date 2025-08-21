import { findPostBySlugCached } from "@/lib/post/queries"
import Image from "next/image"
import PostHeading from "../PostHeading"
import { formatRelativeDate } from "@/utils/format-datetime"
import PostDate from "../PostDate"

type SinglePostProps = {
  slug: string
}

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug)

  return (
    <>
      <article>
        <header className="flex flex-col mb-8">
          <div className="flex flex-col gap-2">
              <Image
                src={post.coverImageUrl}
                width={1400}
                height={800}
                alt={post.title}
                title={post.title}
                className="max-h-[500] block rounded-xl"
              />

            <div>
              <PostHeading url={`/post/${post.slug}`}>
                {post.title}
              </PostHeading>

              <p>{post.author} | <PostDate dateTime={post.createdAt} /> </p>
            </div>
          </div>
        </header>

        <div className="mb-8 text-xl">
          <strong><p>{post.excerpt}</p></strong> 
        </div>

        <div className="leading-8 text-lg">
          {post.content}
        </div>
      </article>
    </>
  )
}
