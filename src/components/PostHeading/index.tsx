import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode,
  url: string,
  as?: 'h1' | 'h2' | 'h3'
}

export default function PostHeading({
  children, 
  url,
  as: Tag = 'h2'
}: PostHeadingProps) {

  const postClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl hover:text-slate-600 dark:hover:text-slate-300 transition duration-200',
    h2: 'text-2xl/tight font-extrabold sm:text-lg lg:text-2xl hover:text-slate-600 dark:hover:text-slate-300 transition duration-200',
    h3: 'text-md/tight font-extrabold sm:text-4xl hover:text-slate-600 dark:hover:text-slate-300 transition duration-200'
  }

  return (
    <Tag className={postClassesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
