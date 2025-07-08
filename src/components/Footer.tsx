import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/tuousername' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/tuousername' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/tuousername' },
    { name: 'Email', icon: Mail, href: 'mailto:tua@email.com' },
  ]

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Il Mio Sito
            </Link>
            <p className="mt-2 text-gray-600 text-sm">
              Blog personale e portfolio di progetti. 
              Condivido le mie esperienze nel mondo dello sviluppo web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Links Rapidi
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-600 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-primary-600 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Seguimi
            </h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} Il Mio Sito Web. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}