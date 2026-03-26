import ReactMarkdown from 'react-markdown'

export function MarkdownRenderer({ markdown, className }: { markdown: string; className?: string }) {
  return (
    <div className={className ? `markdown-body ${className}` : 'markdown-body'}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

