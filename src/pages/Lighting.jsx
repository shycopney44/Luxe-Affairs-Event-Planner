
import React, { useState } from "react";

export default function Lighting() {
  const [selectedImage, setSelectedImage] = useState(null);

  const lightingImages = [
    { src: "/images/banquet-bg33.jpeg", alt: "Romantic Uplighting" },
    { src: "/images/banquet-bg34.jpeg", alt: "Crystal Chandelier Glow" },
    { src: "/images/banquet-bg36.jpeg", alt: "LED Wall Magic" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-6">
        Lighting That Transforms
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Luxe Affairs lighting design creates ambiance, drama, and unforgettable moments. From romantic uplighting to immersive LED walls, every glow is intentional.
      </p>

      {/* Lighting Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {lightingImages.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-purple-600 mb-2 text-center">
              {img.alt}
            </h2>
            <button
              onClick={() => setSelectedImage(img)}
              className="relative group w-full max-w-[400px] h-[300px] overflow-hidden rounded-xl shadow-md focus:outline-none"
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
          </div>
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
