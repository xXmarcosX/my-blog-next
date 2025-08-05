import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-center items-center py-14 text-sm gap-2">
        <h1>Copyright &copy; {new Date().getFullYear()}</h1>
        <p>-</p>
        <p><Link href='/' className="underline">My Blog</Link></p>
      </footer>
    </>
  )
}
