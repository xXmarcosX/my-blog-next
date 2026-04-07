import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import { cacheLife, cacheTag } from "next/cache"
import { notFound } from "next/navigation"

export async function findAllPublicPostsCached() {
  'use cache'

  cacheTag('posts')

  return await postRepository.findAllPublic()
}


export async function findPostBySlugCached(slug: string): Promise<PostModel> {
  'use cache'

  cacheTag('posts')

  return await postRepository.findBySlugPublic(slug).catch(() => notFound())
}