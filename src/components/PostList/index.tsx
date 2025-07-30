import { postRepository } from "@/repositories/post"

export default async function PostList() {
  const posts = await postRepository.findAll()

  return (
    <div>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>
      })}
    </div>
  )
}
