import clsx from "clsx";

export default function HomePage() {
  return (
    <>
      <h1 className={clsx("text-6xl font-bold",
        "text-blue-500 hover:text-white",
        "hover:bg-blue-500 transition",
        "duration-200",
        "cursor-pointer")}
      >
        Teste
      </h1>
    </>
  )
}
