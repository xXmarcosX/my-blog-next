import { PostModel } from "@/models/post/post-model";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

type PostTitleProps = {
  post: PostModel
}

export default async function Posttitle({post}: PostTitleProps) {
    const colorIcon = (postPublished: boolean): string => {
    return postPublished ? '#d46419' : 'red'
  }

  const iconsSize = 25

  return (
    <>
      <Link href={`/admin/post/${post.id}`} className="flex items-center gap-3 text-left">
        <span className="shrink-0 flex items-center justify-center">
          {post.published ? (
            <FaCheckCircle size={iconsSize} color={colorIcon(post.published)} />
          ) : (
            <IoIosRemoveCircle size={29} color={colorIcon(post.published)} />
          )}
        </span>
        <span className="leading-tight">{post.title}</span>
      </Link>
    </>
  )
}