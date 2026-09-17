import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

interface MarkdownProps {
  content: string
  className?: string
}

// Custom components for markdown rendering
const components = {
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-serif font-bold text-ink mt-8 mb-4 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-serif font-bold text-ink mt-6 mb-3 leading-tight">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-serif font-semibold text-ink mt-5 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-base text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-base text-gray-700">
      {children}
    </li>
  ),
  a: ({
    href,
    children,
  }: {
    href?: string
    children: React.ReactNode
  }) => {
    // Rewrite absolute URLs to relative paths
    let url = href || '#'
    if (url.includes('https://www.prospertyrealestate.com')) {
      url = url.replace('https://www.prospertyrealestate.com', '')
    }

    // Use next/link for internal links
    if (url.startsWith('/')) {
      return (
        <Link href={url} className="text-gold hover:text-ink font-semibold transition-colors">
          {children}
        </Link>
      )
    }

    // External links
    return (
      <a
        href={url}
        className="text-gold hover:text-ink font-semibold transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  },
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-gold pl-4 py-2 my-4 text-gray-700 italic bg-cream bg-opacity-50 rounded">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-cream text-ink px-2 py-1 rounded font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
      {children}
    </pre>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-gray-300 px-4 py-2 bg-cream text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-gray-300 px-4 py-2 text-gray-700">
      {children}
    </td>
  ),
}

export default function Markdown({ content, className = '' }: MarkdownProps) {
  return (
    <div className={`prose prose-lg max-w-4xl ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
