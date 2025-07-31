import Container from "@/components/Container";
import Header from "@/components/Header";
import PostCoverImage from "@/components/PostCoverImage";
import PostHeading from "@/components/PostHeading";
import PostList from "@/components/PostList";
import SpinLoader from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function HomePage() {
  const posts = postRepository.findAll()

  return (
    <>
      <Container>
        <Header />

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group w-full sm:h-96">

          <PostCoverImage linkProps={{
            href: '/post/sahshaj'
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

            <PostHeading url="/" as="h1">
              Lorem ipsum dolor sit amet consectetur
            </PostHeading>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam voluptate quisquam accusantium esse accusamus officia, tempora minus mollitia quod ex ullam ratione. Quod dolores explicabo animi consequuntur non eligendi!</div>
        </section>

        <Suspense fallback={<SpinLoader containerClasses="min-h-screen" />}>
          <PostList />
        </Suspense>

        <footer>
          <h1 className="flex justify-center items-center text-4xl">footer</h1>
        </footer>
      </Container>
    </>
  )
}
