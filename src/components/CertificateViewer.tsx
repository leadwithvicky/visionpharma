'use client'

import React, { useEffect, useState } from 'react'

const CertificateViewer = () => {
  const [pdfData, setPdfData] = useState<string | null>(null)

  useEffect(() => {
    const storedPdf = sessionStorage.getItem('verifiedCertificate')
    if (storedPdf) {
      setPdfData(storedPdf)
    }
  }, [])

  return (
    <div>
      {pdfData ? (
        <iframe
          src={pdfData}
          width="100%"
          height="600px"
          title="Certificate"
        />
      ) : (
        <p>No certificate found in session storage.</p>
      )}
    </div>
  )
}

export default CertificateViewer
