import clsx from "clsx"

export type InputCheckBoxProps = {
  id: string,
  labelText?: string,
  type?: 'checkbox'
} & React.ComponentProps<'input'>

export function InputCheckBox({ labelText = '', id, type = 'checkbox', ...props }: InputCheckBoxProps) {
  const inputClasses = clsx(
    'w-4 h-4',
    'outline-none'
  )

  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type={type}
          {...props}
          id={id}
          className={`${inputClasses} ${props.className}`}
        />
        {labelText && <label htmlFor={id} className="text-sm">{labelText}</label>}
      </div>
    </>
  )
}