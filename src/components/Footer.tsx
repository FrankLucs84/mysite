import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="w-9 h-9 bg-primary-700 text-white rounded-lg flex items-center justify-center font-bold text-sm">FL</span>
              <span className="font-semibold text-gray-900">Francesco Lucignano</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              PMO | ICT | Business Analyst.<br />
              Specializzato in Project Management e soluzioni basate sull&apos;IA.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigazione
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Chi sono', href: '/about' },
                { name: 'Competenze', href: '/portfolio' },
                { name: 'Contatti', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contatti
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/francescolucignano84/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/FrankLucs84"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:francesco.lucignano@gmail.com"
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              francesco.lucignano@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Francesco Lucignano. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
