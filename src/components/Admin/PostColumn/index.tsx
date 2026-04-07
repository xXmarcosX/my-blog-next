import { PostModel } from "@/models/post/post-model"
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa"
import { IoIosRemoveCircle } from "react-icons/io"
import Posttitle from "../PostTitle"

type PostColumnProps = {
  post: PostModel
}

export default async function PostColumn({ post }: PostColumnProps) {
  return (
    <>
      <div className="flex flex-col gap-1 w-full lg:w-auto">
        <Posttitle post={post}/>
      </div>

      {!post.published && (
        <span className="italic text-xs text-gray-500 dark:text-gray-400 ml-9">
          (Não publicado)
        </span>
      )}
    </>
  )
}