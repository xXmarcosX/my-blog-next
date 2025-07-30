import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>,
  linkProps: React.ComponentProps<typeof Link>,
  height: string,
}

export default function PostCoverImage({ imageProps, linkProps, height }: PostCoverImageProps) {
  return (
    <>
      <Link {...linkProps} className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-md',
        linkProps.className
      )}>
        <Image
          {...imageProps}
          className={clsx(
            'w-screen',
            `h-${height}`,
            'group-hover:scale-105',
            'transition duration-200',
            imageProps.className
          )}
          priority
        />
      </Link >
    </>
  )
}
