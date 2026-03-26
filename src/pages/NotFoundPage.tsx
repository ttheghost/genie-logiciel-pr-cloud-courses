import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div style={{ maxWidth: 980, margin: '0 auto' }}>
      <h1 style={{ marginTop: 8 }}>Page introuvable</h1>
      <p>
        <Link to="/" style={{ color: 'var(--accent)' }}>
          Retour à l'accueil
        </Link>
      </p>
    </div>
  )
}

