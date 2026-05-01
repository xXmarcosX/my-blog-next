import clsx from "clsx"

export type InputTextProps = {
  id: string,
  labelText?: string,
} & React.ComponentProps<'input'>

export function InputText({ labelText = '', id, ...props }: InputTextProps) {
  const inputClasses = clsx(
    'bg-white outline-0 ring-2 ring-slate-400 text-base/tight',
    'dark:ring-2 dark:ring-gray-500 text-base/tight dark:text-slate-800',
    'rounded-md',
    'p-2 transition focus:ring-blue-600 dark:focus:ring-slate-500 dark:focus:ring-3',
    'placeholder-slate-500',
    'disabled:placeholder-slate-400 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:pointer-events-auto',
    'read-only:bg-slate-200 read-only:text-slate-500'
  )

  return (
    <>
      <div className="flex flex-col gap-2">
        {labelText && <label htmlFor={id} className="text-sm">{labelText}</label>}
        <input {...props} id={id} className={`${inputClasses} ${props.className}`}/>
      </div>
    </>
  )
}