import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

type SafeMarkdownProps = {
  markdown: string
}

export default function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div className={clsx(
      'prose prose-slate dark:prose-invert dark:text-gray-100',
      'w-full max-w-none',
      'prose-a:text-blue-500 prose-a:transition',
      'prose-a:hover:text-blue-700',
      'prose-img:mx-auto prose-img:p-8',
      'md:prose-lg'
    )}>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({node, ...props}) => {
            return (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[600px]' {...props}/>
              </div>
            )
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
