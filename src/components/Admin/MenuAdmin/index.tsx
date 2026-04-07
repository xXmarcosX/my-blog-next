'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenu, BiPlus } from "react-icons/bi";
import { FiFile } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { TbHomeBitcoin } from "react-icons/tb";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathName])

  const navClasses = clsx(
    'text-slate-100 rounded-lg flex flex-col mb-10',
    'bg-slate-200 text-slate-900 dark:bg-gray-700 dark:text-white',
    'sm:flex-row sm:flex-wrap w-full sm:w-fit',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible, sm:h-auto'
  )

  const linkClasses = clsx(
    'px-4 flex items-center gap-4 rounded-md',
    'transition hover:bg-slate-300 dark:hover:bg-slate-800',
    'h-10 shrink-0',
    'cursor-pointer'
  )

  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-200 italic',
    'sm:hidden'
  )

  return (
    <>
      <header className="flex items-center justify-center">
        <nav className={navClasses}>
          <button className={openCloseBtnClasses} onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && (
              <>
                <BiMenu />
                Menu
              </>
            )}

            {isOpen && (
              <>
                <IoCloseCircle />
                Fechar
              </>
            )}
          </button>

          <a href="/" target="_blank" className={linkClasses}>
            <TbHomeBitcoin size={16} />
            Home
          </a>

          <Link href={'/admin/post'} className={linkClasses}>
            <FiFile size={16} />
            Posts
          </Link>

          <Link href={'/admin/post/new'} className={linkClasses}>
            <BiPlus size={16} />
            Criar Post
          </Link>
        </nav>
      </header>
    </>
  )
}