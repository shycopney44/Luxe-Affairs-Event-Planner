import { useState, useEffect } from "react";

const images = [
  "/images/banquet-bg.jpeg.webp",
  "/images/banquet-bg2.jpeg",
  "/images/banquet-bg3.jpeg",
  "/images/banquet-bg4.jpeg",
];

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
