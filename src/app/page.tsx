import FeaturedPost from "@/components/FeaturedPost";
import PostList from "@/components/PostList";
import SpinLoader from "@/components/SpinLoader";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

export default async function HomePage() {
 'use cache'

 cacheLife('hours')

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
