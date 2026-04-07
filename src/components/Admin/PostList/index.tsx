import { PostModel } from "@/models/post/post-model"
import DeletePostButton from "../DeletePostButton"
import clsx from "clsx"
import PostColumn from "../PostColumn"

type PostListProps = {
  posts: PostModel[]
}

export default async function PostList({ posts }: PostListProps) {
  const classes = clsx(
    'p-2.5',
    'flex flex-col gap-4',
    'lg:flex-row lg:justify-between lg:items-center',
    'md:flex-row md:justify-between md:items-center',
    'border-b border-b-gray-400 dark:border-b-gray-600',
  )

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className={classes}>
            <PostColumn post={post}/>

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        )
      })}
    </>
  )
}