export default function cloudinaryLoader({ src, width, quality }) {
  try {
    // Decode the URL first in case it's encoded by Next.js
    let decodedSrc = src;
    try {
      decodedSrc = decodeURIComponent(src);
    } catch (e) {
      // If decoding fails, use the original source
      decodedSrc = src;
    }

    // Check if it's a Cloudinary URL
    if (!decodedSrc.includes('res.cloudinary.com')) {
      return src;
    }

    // Extract the path from the Cloudinary URL
    const url = new URL(decodedSrc);
    const pathParts = url.pathname.split('/');
    const uploadIndex = pathParts.indexOf('upload');

    if (uploadIndex === -1) {
      // If it's not a standard Cloudinary URL, return as is
      return src;
    }

    // Get everything after 'upload'
    const imagePath = pathParts.slice(uploadIndex + 1).join('/');

    const params = [
      'f_auto', // Automatic format optimization
      'c_limit', // Constrain within given dimensions
      `w_${width}`, // Set width
      `q_${quality || '75'}`, // Set quality
    ];

    return `https://res.cloudinary.com/${pathParts[1]}/image/upload/${params.join(',')}/${imagePath}`;
  } catch (error) {
    // If URL parsing fails, return the original source
    console.warn('Cloudinary loader error:', error.message);
    return src;
  }
}
