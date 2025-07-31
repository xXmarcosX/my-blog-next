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
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight sm:text-2xl',
    h3: 'text-md/tight font-extrabold sm:text-4xl'
  }

  return (
    <Tag className={postClassesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
