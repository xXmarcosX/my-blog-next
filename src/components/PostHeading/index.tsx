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

  return (
    <Tag className='text-2xl/tight font-extrabold sm:text-4xl'>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
