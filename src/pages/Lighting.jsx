import React, { useState, useRef } from "react";

export default function Lighting() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollPosition = useRef(0);

  const lightingImages = [
    { src: "/images/banquet-bg33.jpeg", alt: "Romantic Uplighting" },
    { src: "/images/banquet-bg34.jpeg", alt: "Crystal Chandelier Glow" },
    { src: "/images/banquet-bg36.jpeg", alt: "LED Wall Magic" },
  ];

  const openImage = (img) => {
    scrollPosition.current = window.scrollY;
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";

    window.scrollTo({
      top: scrollPosition.current,
      behavior: "instant",
    });
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">

      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-6 drop-shadow-xl">
        Lighting That Transforms
      </h1>

      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-xl">
        Luxe Affairs lighting design creates ambiance, drama, and unforgettable moments.
        From romantic uplighting to immersive LED walls, every glow is intentional.
      </p>

      {/* Lighting Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {lightingImages.map((img, index) => (
          <div key={index} className="flex flex-col items-center">

            <h2 className="text-2xl font-bold text-pink-300 mb-2 text-center drop-shadow-xl">
              {img.alt}
            </h2>

            <div
              onClick={() => openImage(img)}
              className="relative group w-full max-w-[400px] h-[300px] overflow-hidden rounded-xl shadow-xl backdrop-blur-xl bg-white/10 border border-white/20 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold drop-shadow-xl">
                  {img.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[99999]">
          <div className="relative max-w-3xl w-full px-4 pt-28">

            {/* Modal Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-white text-5xl font-bold hover:text-pink-300 drop-shadow-xl z-[100000]"
            >
              ×
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[55vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Caption */}
            <p className="text-center text-xl font-bold text-white mt-4 drop-shadow-xl">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
