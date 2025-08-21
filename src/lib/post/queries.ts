import { postRepository } from "@/repositories/post"
import { notFound } from "next/navigation"
import { cache } from "react"

export const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic()
)

export const findPostBySlugCached = cache(
  async (slug: string) => await postRepository.findBySlug(slug).catch(() => notFound())
)

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id)
)