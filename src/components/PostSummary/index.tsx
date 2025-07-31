import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import PostHeading from "../PostHeading";
import type { PostHead } from "@/types/post-heading";

type PostSummaryProps = {
  postHeading: PostHead,
  postLink: string,
  createdAt: string,
  title: string,
  excerpt: string
}

export default function PostSummary({postHeading, postLink, createdAt, title, excerpt}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <time
        dateTime={createdAt}
        className="text-slate-600 dark:text-gray-400 text-sm/tight font-normal"
        title={formatDateTime(createdAt)}
      >
        {formatRelativeDate(createdAt)}
      </time>

      <div>
        <PostHeading url={postLink} as={postHeading}>
          {title}
        </PostHeading>
      </div>

      <div>
        <p className="font-normal sm:text-sm">
          {excerpt}
        </p>
      </div>
    </div>
  )
}
