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
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`background-${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Optional overlay for color harmony */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-pink-500/30 z-10" />
    </div>
  );
}
