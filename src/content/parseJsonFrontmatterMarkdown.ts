export type ParsedJsonFrontmatterMarkdown = {
  meta: unknown | null
  content: string
}

export function parseJsonFrontmatterMarkdown(rawText: string): ParsedJsonFrontmatterMarkdown {
  // Normalize line endings so the delimiter check works on Windows too.
  const raw = rawText.replace(/\r\n/g, '\n')

  // Expected format:
  // { ...json... }
  // ---
  // markdown content...
  const delimiter = '\n---\n'
  const idx = raw.indexOf(delimiter)

  if (idx === -1) {
    return { meta: null, content: raw.trim() }
  }

  const jsonPart = raw.slice(0, idx).trim()
  const contentPart = raw.slice(idx + delimiter.length).trim()

  try {
    return { meta: JSON.parse(jsonPart), content: contentPart }
  } catch {
    return { meta: null, content: contentPart }
  }
}

