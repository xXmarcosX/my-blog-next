import clsx from "clsx"
import Link from "next/link"

export default function Header() {
  const classes = clsx(
    'text-4xl/normal font-extrabold py-8', // mobile
    'sm:text-5xl/normal sm:py-10', // tablet
    'md:text-6xl/normal md:py-12', // tablet
    'lg:text-7xl/normal md:py-13', // desktop
  )

  return (
    <header>
      <h1 className={classes}>
        <Link href="#">My Blog</Link>
      </h1>
    </header>
  )
}
