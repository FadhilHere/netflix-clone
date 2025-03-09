import { useEffect, useState } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
      document.body.style.overflow = "hidden"; // Disable scroll saat modal terbuka
    } else {
      setShowAnimation(false);
    }

    return () => {
      document.body.style.overflow = "auto"; // Aktifkan scroll saat modal ditutup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
      onClick={onClose} // Tutup modal saat klik di luar video
    >
      <div
        className={`relative bg-black rounded-lg overflow-hidden transition-transform duration-300 ${
          showAnimation ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik di dalam video
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl z-10"
        >
          ✖
        </button>

        {/* Video Player */}
        <video
          className="w-[80vw] max-w-4xl h-[45vw] max-h-[60vh] object-cover rounded-lg"
          controls
          autoPlay
        >
          <source src="/vina20.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
