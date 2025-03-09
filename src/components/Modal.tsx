import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
      document.body.style.overflow = "hidden"; // Disable scroll saat modal terbuka
    } else {
      setShowAnimation(false);
      setTimeout(() => {
        document.body.style.overflow = "auto"; // Pastikan scroll kembali setelah animasi selesai
      }, 300); // Sesuaikan dengan durasi animasi modal
    }

    return () => {
      document.body.style.overflow = "auto"; // Pastikan selalu dikembalikan saat komponen unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
      onClick={onClose} // Tutup modal saat klik di luar modal
    >
      <div
        className={`relative bg-[#141414] text-white rounded-lg overflow-hidden max-w-2xl w-full transition-transform duration-300 ${
          showAnimation ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik di dalam modal
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✖
        </button>

        {/* Gambar Modal */}
        <div className="w-full h-64 relative">
          <img
            src="/33.jpeg"
            alt="Modal Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Modal */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            Happy Birthday, Sayang! 💙💗
          </h2>
          <p className="text-gray-300 mt-4">
            Dear Vina,
            <br />
            <strong>Happy birthday</strong>, my love!
            <br />
            <br />
            abang seneng banget jadi orang terdekat vina ketika vina menyentuh
            kepala 2! this is your first birthday since we run our relationship,
            kedatangan vina di hidup sangat sangat memberikan warna baru di
            setiap aspek kehidupan abang. Vina bagi abang bukan hanya sekedar
            pacar, vina juga adalah sahabat terbaik abang, dan #1 emotional
            support abang. Today is your day! i hope today bring you all the
            happiness that you deserve. Semoga segala usaha vina selama ini
            membuahkan hasil yg sesuai dengan apa yg vina harapkan, selalu
            diberikan kesehatan, rezeki, dan dijauhkan dari segala musibah. I’ll
            always be here for you, even at your lowest. Thankyou for making me
            a better person than before, i love you so much, vina!.
            <br />
            <br />
            Coded with all my love,
            <br />
            Fadhil Parmata
          </p>
        </div>
      </div>
    </div>
  );
}
