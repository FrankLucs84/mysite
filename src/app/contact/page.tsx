'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Messaggio inviato! Ti risponderò al più presto.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contattami</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Hai un progetto, una proposta o vuoi semplicemente fare due chiacchiere? Scrivimi, rispondo sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Invia un messaggio</h2>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Il tuo nome"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tua@email.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Oggetto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Di cosa vuoi parlare?"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Scrivi qui il tuo messaggio..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Invio in corso...' : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Invia messaggio
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-5">Informazioni di contatto</h2>
              <div className="space-y-4">
                <a href="mailto:francesco.lucignano@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <p className="text-sm font-medium">francesco.lucignano@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+393500109024" className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Telefono</p>
                    <p className="text-sm font-medium">+39 350 010 9024</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Posizione</p>
                    <p className="text-sm font-medium">Brusciano (NA), Campania, Italia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-gray-900 mb-5">Social & Profili</h2>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/francescolucignano84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">LinkedIn – francescolucignano84</span>
                </a>
                <a
                  href="https://github.com/FrankLucs84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Github className="h-5 w-5 text-gray-700" />
                  <span className="text-sm font-medium text-gray-800">GitHub – FrankLucs84</span>
                </a>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <h2 className="font-bold text-gray-900 mb-3">Disponibilità</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                  Consulenze in Project Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                  Business Analysis e analisi funzionale
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                  Supporto a progetti ICT/ERP
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
