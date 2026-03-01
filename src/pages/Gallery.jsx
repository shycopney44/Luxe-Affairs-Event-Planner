import React, { useState, useRef, useEffect } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const scrollPosition = useRef(0);

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

  const openImage = (img, index) => {
    scrollPosition.current = window.scrollY;
    setSelectedImage(img);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    document.body.style.overflow = "auto";

    window.scrollTo({
      top: scrollPosition.current,
      behavior: "instant",
    });
  };

  // ⭐ BACK BUTTON FIX — close modal instead of navigating away
  useEffect(() => {
    if (selectedImage) {
      window.history.pushState({ modal: true }, "");

      const handlePopState = () => {
        closeImage();
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [selectedImage]);

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">

      {/* ⭐ UPDATED HEADER (Event Styles Typography) */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-12 drop-shadow-xl">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative group w-full h-64 overflow-hidden rounded-xl shadow-xl backdrop-blur-xl bg-white/10 border border-white/20 cursor-pointer"
            onClick={() => openImage(img, index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[99999]">

          <div className="max-w-5xl w-full px-4">

            {/* X BUTTON — TOP LEFT OUTSIDE IMAGE */}
            <div className="flex justify-start mb-4">
              <button
                onClick={closeImage}
                className="text-white text-5xl font-bold hover:text-pink-300 drop-shadow-xl"
              >
                ×
              </button>
            </div>

            {/* CLEAN ROW: left arrow — image — right arrow */}
            <div className="flex items-center justify-center gap-6">

              {/* LEFT ARROW */}
              <button
                onClick={showPrev}
                className="text-white text-5xl font-bold hover:text-pink-300 drop-shadow-xl"
              >
                ‹
              </button>

              {/* IMAGE */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-w-3xl h-[60vh] object-cover rounded-xl shadow-2xl"
              />

              {/* RIGHT ARROW */}
              <button
                onClick={showNext}
                className="text-white text-5xl font-bold hover:text-pink-300 drop-shadow-xl"
              >
                ›
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
