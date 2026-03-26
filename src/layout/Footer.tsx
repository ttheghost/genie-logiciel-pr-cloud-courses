import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 w-full mt-20 border-t border-slate-200/30 dark:border-slate-800/30">
      <div className="max-w-screen-2xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="font-serif text-lg italic text-slate-900 dark:text-slate-100 block mb-2">
            Software Engineering
          </span>
          <p className="font-sans text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            © 2026 Software Engineering. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-8 font-sans text-xs uppercase tracking-widest">
          <Link
            className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors underline underline-offset-4"
            to="/"
          >
            University Press
          </Link>
          <a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors" href="#">
            Digital Archive
          </a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors" href="#">
            Scholarly Guidelines
          </a>
        </nav>
      </div>
    </footer>
  )
}

