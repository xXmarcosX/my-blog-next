import Container from "@/components/Container";
import FeaturedPost from "@/components/FeaturedPost";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import SpinLoader from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function HomePage() {
  const posts = postRepository.findAllPublic()

  return (
    <>
      <Suspense fallback={<SpinLoader containerClasses="min-h-screen" />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader containerClasses="min-h-screen" />}>
        <PostList />
      </Suspense>
    </>
  )
}
