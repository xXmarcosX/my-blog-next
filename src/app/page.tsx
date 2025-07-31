import Container from "@/components/Container";
import FeaturedPost from "@/components/FeaturedPost";
import Header from "@/components/Header";
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
        
        <Suspense fallback={<SpinLoader containerClasses="min-h-screen" />}>
          <FeaturedPost />
        </Suspense>

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
