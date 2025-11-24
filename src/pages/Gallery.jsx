import React, { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: "/images/banquet-bg.jpeg.webp", alt: "Banquet Elegance 1" },
    ...Array.from({ length: 30 }, (_, i) => {
      const index = i + 2;
      if (index === 21 || index === 28) return null;
      return {
        src: `/images/banquet-bg${index}.jpeg`,
        alt: `Banquet Elegance ${index}`,
      };
    }).filter(Boolean),
    { src: "/images/banquet-bg32.jpeg", alt: "Banquet Elegance 32" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-12">
        Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className="relative group w-full h-64 overflow-hidden rounded-xl shadow-md focus:outline-none"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-pink-300"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
            <p className="text-center text-white mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
