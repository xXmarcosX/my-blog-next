import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    })

    return posts
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true)
    })

    return posts
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id)
    })

    if (!posts) throw new Error('Post não encontrado')

    return posts
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await drizzleDb.query.posts.findFirst({
      where: (post, { eq, and }) => and(eq(post.slug, slug), eq(post.published, true))
    })

    if (!posts) throw new Error('Post não encontrado')

    return posts
  }
}