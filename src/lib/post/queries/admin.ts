import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import { cacheTag } from "next/cache"
import { notFound } from "next/navigation"

export async function findPostByIdCachedAdmin(id: string): Promise<PostModel> {
  'use cache'

  return await postRepository.findById(id).catch(() => notFound())
}

export async function findAllPostsAdmin(): Promise<PostModel[]> {
  'use cache'

  cacheTag('posts')

  return await postRepository.findAll().catch(() => notFound())
}

