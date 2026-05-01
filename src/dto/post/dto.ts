import { PostModel } from "@/models/post/post-model"

export type PublicPost = Omit<PostModel, 'updatedAt' | 'createdAt'>

export const makePartialPublicPost = (post?: Partial<PostModel>): PublicPost => {
  return {
    id: post?.id || '',
    author: post?.author || '',
    content: post?.content || '',
    coverImageUrl: post?.coverImageUrl || '',
    excerpt: post?.excerpt || '',
    published: post?.published || false,
    slug: post?.slug || '',
    title: post?.title || '',
  }
}

export const makePublicPostFromDb = (post: PostModel): PublicPost => {
  return makePartialPublicPost(post)
}