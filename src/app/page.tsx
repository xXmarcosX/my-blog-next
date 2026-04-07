import FeaturedPost from "@/components/FeaturedPost";
import PostList from "@/components/PostList";
import SpinLoader from "@/components/SpinLoader";
import { cacheTag } from "next/cache";
import { Suspense } from "react";

export default async function HomePage() {
  'use cache'

  cacheTag('posts')

  return (
    <>
      <Suspense fallback={<SpinLoader containerClasses="min-h-screen" />}>
        <FeaturedPost />
        <PostList />
      </Suspense>
    </>
  )
}
