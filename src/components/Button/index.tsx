type ButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<'button'>

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <>
      <button>
        {children}
      </button>
    </>
  )
}