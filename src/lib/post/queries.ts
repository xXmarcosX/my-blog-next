import { PostModel } from "@/models/post/post-model"
import { postRepository } from "@/repositories/post"
import { cacheLife } from "next/cache"
import { notFound } from "next/navigation"
import { cache } from "react"

export async function findAllPublicPosts() {
  'use cache'

  return await postRepository.findAllPublic()
}


export async function findPostBySlugCached(slug: string): Promise<PostModel> {
  'use cache'

  return await postRepository.findBySlugPublic(slug).catch(() => notFound())
}


export async function findPostByIdCached(id: string): Promise<PostModel> {
  'use cache'

  return await postRepository.findById(id).catch(() => notFound())
}