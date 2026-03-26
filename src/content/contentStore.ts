import type { Course, MarkdownDocument, TP } from '../models/content'
import { parseJsonFrontmatterMarkdown } from './parseJsonFrontmatterMarkdown'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function fileNameFromPath(path: string) {
  const parts = path.split('/')
  const last = parts[parts.length - 1] ?? path
  return last.replace(/\.(json|md)$/i, '')
}

// Eagerly load all JSON files at build time
const coursesRaw = import.meta.glob('../../content/courses/*.json', { eager: true }) as Record<
  string,
  { default: unknown }
>
const tpsRaw = import.meta.glob('../../content/tps/*.json', { eager: true }) as Record<string, { default: unknown }>
const markdownRawModules = import.meta.glob('../../content/markdown/*.md', {
  eager: true,
  query: '?raw',
}) as Record<string, { default: string }>

const markdownRaw: Record<string, string> = Object.fromEntries(
  Object.entries(markdownRawModules).map(([path, mod]) => [path, mod.default]),
)

const coursesList: Course[] = Object.values(coursesRaw)
  .map((m) => m.default)
  .filter((v): v is Course => {
    if (!isRecord(v)) return false
    return (
      v.type === 'Course' &&
      typeof v.reference === 'string' &&
      typeof v.title === 'string' &&
      (v.introMarkdownRef === undefined || typeof v.introMarkdownRef === 'string')
    )
  })

const tpsList: TP[] = Object.values(tpsRaw)
  .map((m) => m.default)
  .filter((v): v is TP => {
    if (!isRecord(v)) return false
    return (
      v.type === 'TP' &&
      typeof v.reference === 'string' &&
      typeof v.courseRef === 'string' &&
      typeof v.title === 'string' &&
      (v.statementMarkdownRef === undefined || typeof v.statementMarkdownRef === 'string')
    )
  })

const markdownDocuments: MarkdownDocument[] = Object.entries(markdownRaw).map(([path, raw]) => {
  const parsed = parseJsonFrontmatterMarkdown(raw)
  const meta = parsed.meta

  const fileBase = fileNameFromPath(path)
  const reference = isRecord(meta) && typeof meta.reference === 'string' ? meta.reference : fileBase

  const type =
    isRecord(meta) && typeof meta.type === 'string'
      ? meta.type
      : undefined

  return {
    type,
    reference,
    meta,
    content: parsed.content,
  }
})

export const coursesByReference = new Map(coursesList.map((c) => [c.reference, c]))
export const tps = [...tpsList].sort((a, b) => a.title.localeCompare(b.title, 'fr'))
export const markdownByReference = new Map(markdownDocuments.map((d) => [d.reference, d]))

export const markdownDocumentsSorted = [...markdownDocuments].sort((a, b) =>
  a.reference.localeCompare(b.reference, 'fr'),
)

export const courses = [...coursesList].sort((a, b) => a.title.localeCompare(b.title, 'fr'))
export const exams = [] as unknown[]

