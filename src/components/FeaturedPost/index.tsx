import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

export default function FeaturedPost() {
  const slug = 'postSlug'
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
            src: '/images/pessoa-altamente-eficaz.png',
            sizes: '100vw',
            priority: true,
            className: 'h-full'
          }}
        />

        <div className="flex flex-col gap-8 sm:justify-center">
          <time dateTime="2025-07-29" className="text-slate-600 dark:text-gray-400 text-sm/tight">29/07/2025 15:15</time>

          <PostHeading url={postLink} as="h1">
            Lorem ipsum dolor sit amet consectetur
          </PostHeading>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam voluptate quisquam accusantium esse accusamus officia, tempora minus mollitia quod ex ullam ratione. Quod dolores explicabo animi consequuntur non eligendi!</div>
      </section>
    </>
  )
}
