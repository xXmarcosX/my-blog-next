import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime"

type PostDateProps = {
  dateTime: string
}
export default function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 dark:text-gray-400 text-sm/tight font-normal"
      title={formatDateTime(dateTime)}
    >
      {formatRelativeDate(dateTime)}
    </time>
  )
}
