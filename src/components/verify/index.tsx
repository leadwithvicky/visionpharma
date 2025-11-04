'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy, FaCheck, FaSearch, FaCheckCircle } from 'react-icons/fa'
import jsPDF from 'jspdf'
import Image from 'next/image'

// Component for verifying and displaying certificates
const VerifyCertificate = () => {
  // Hooks for routing and URL params
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = useParams()

  // State variables
  const [certificateId, setCertificateId] = useState('')
  const [certificateData, setCertificateData] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [copied, setCopied] = useState(false)

  // Effect to check URL params on load
  useEffect(() => {
    const id = (params.certificateId as string) || searchParams.get('certificateId')
    if (id) {
      setCertificateId(id)
      fetchCertificate(id)
    }
  }, [params, searchParams])

  // Function to fetch certificate from API
  const fetchCertificate = async (id: string) => {
    setLoading(true)
    setError(null)
    setCertificateData(null)
    try {
      const apiUrl = `/api/verify-certificate/${id}`
      const response = await fetch(apiUrl)
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`)
      }
      const data = await response.json()
      setCertificateData(data)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      setError(`Error: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (certificateId.trim()) {
      router.push(`/verify-certificate/${certificateId}`)
    }
  }

  // Handler for retry button
  const handleRetry = () => {
    setError(null)
    setCertificateData(null)
    // setCertificateId('')
    setDownloaded(false)
    router.push('/verify-certificate')
  }

  // Handler for download
  const handleDownload = async () => {
    if (certificateData) {
      // Convert base64 to blob
      const byteCharacters = atob(certificateData.imageBase64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: 'image/png' })

      // Convert image to PDF with exact image size
      const img = document.createElement('img')
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        // Convert pixels to mm (assuming 72 DPI)
        const widthMM = (img.width * 25.4) / 72
        const heightMM = (img.height * 25.4) / 72
        const pdf = new jsPDF({
          orientation: widthMM > heightMM ? 'landscape' : 'portrait',
          unit: 'mm',
          format: [widthMM, heightMM]
        })
        pdf.addImage(img, 'PNG', 0, 0, widthMM, heightMM)
        pdf.save(`certificate-${certificateId}.pdf`)
        setDownloaded(true)
      }
      img.src = URL.createObjectURL(blob)
    }
  }

  // Handler for copy link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Handler for share
  const handleShare = (platform: string) => {
    const url = `https://visiontech.world${window.location.pathname}`
    const text = 'I have successfully completed my certification from VisionTech! 🎉'
    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
        break
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }
  }

  // Render the component
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col md:flex-row">
      {/* Left Side - Certificate Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <AnimatePresence>
          {certificateData && certificateData.imageBase64 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Image
                src={`data:image/png;base64,${certificateData.imageBase64}`}
                alt="Certificate"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-2xl border border-gray-700"
                title="Certificate"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <FaSearch className="text-4xl text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Verify Your Certificate</h2>
              <p className="text-gray-300">Enter your certificate ID to view and download</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Side - Details and Actions */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white/10 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto w-full"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Certificate Verification</h1>
            <p className="text-gray-300">Securely verify and manage your certificates</p>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter Certificate ID"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={loading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex space-x-1">
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                  </div>
                ) : (
                  <>
                    <FaSearch />
                    Verify
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Certificate Details */}
          <AnimatePresence>
            {certificateData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20"
              >
                <div className="flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-green-400 text-3xl mr-2" />
                  <span className="text-green-400 font-semibold text-lg">Verified</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Certificate Details</h3>
                <div className="text-gray-300 space-y-1">
                  <p><span className="font-medium">ID:</span> {certificateId}</p>
                  {/* Add more details if available in certificateData */}
                  {certificateData.name && <p><span className="font-medium">Name:</span> {certificateData.name}</p>}
                  {certificateData.date && <p><span className="font-medium">Date:</span> {certificateData.date}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <AnimatePresence>
            {certificateData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* Download and Copy */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FaDownload />
                    {downloaded ? 'Downloaded ✓' : 'Download PDF'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyLink}
                    className="flex-1 px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2 border border-white/30"
                  >
                    {copied ? <FaCheck /> : <FaCopy />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </motion.button>
                </div>

                {/* Social Share */}
                <div>
                  <h4 className="text-white font-medium mb-3">Share Certificate</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShare('facebook')}
                      className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <FaFacebook />
                      Facebook
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShare('twitter')}
                      className="px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <FaTwitter />
                      Twitter
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShare('linkedin')}
                      className="px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShare('whatsapp')}
                      className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Display */}
          {/* Elegant Error Display */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="mt-8 p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-red-900/30 to-gray-900/20 border border-red-500/20 shadow-lg shadow-red-900/20"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-red-300 text-lg font-semibold tracking-wide"
                >
                  🚫 Certificate Not Found
                </motion.p>

                <p className="text-center text-gray-300 mt-2 text-sm">
                  Please verify the certificate number and try again.
                </p>

                <div className="text-center mt-5">
                  <motion.button
                    whileHover={{ scale: 1.07, boxShadow: '0px 0px 15px rgba(255, 80, 80, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRetry}
                    className="px-7 py-2.5 bg-gradient-to-r from-red-500 to-red-700 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-800 transition-all duration-300"
                  >
                    Try Again
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


          <p className="text-red-300 text-center mb-3"></p>

        </motion.div>
      </div>
    </div>
  )
}

export default VerifyCertificate
