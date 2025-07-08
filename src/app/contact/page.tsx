'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulazione invio form - in un'app reale useresti un endpoint API
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Messaggio inviato con successo! Ti risponderò il prima possibile.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "tua@email.com",
      link: "mailto:tua@email.com"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 333 123 4567",
      link: "tel:+393331234567"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Milano, Italia",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/tuousername",
      color: "text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/tuousername",
      color: "text-gray-800"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contattami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? 
            Non esitare a contattarmi, sarò felice di risponderti!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Invia un messaggio
            </h2>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Oggetto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Di cosa vuoi parlare?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Invio in corso...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Invia messaggio
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informazioni di contatto
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = item.link ? (
                    <a href={item.link} className="text-primary-600 hover:text-primary-700">
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-gray-600">{item.content}</span>
                  )
                  
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="h-5 w-5 text-primary-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        {content}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Seguimi sui social
              </h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="h-8 w-8" />
                    </a>
                  )
                })}
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Puoi anche trovarmi sui social media per aggiornamenti sui miei progetti 
                e condivisioni di contenuti interessanti del mondo tech.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-primary-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Disponibilità
              </h2>
              <p className="text-gray-700 mb-4">
                Attualmente sono disponibile per:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Progetti freelance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Consulenze tecniche
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Collaborazioni part-time
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Posizioni full-time (da valutare)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}