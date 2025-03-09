"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import MovieRow from "@/components/MovieRow";
import MovieRow2 from "@/components/MovieRow2";
import MovieRow3 from "@/components/MovieRow3";
import VideoModal from "@/components/VideoModal"; // Import VideoModal

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // State untuk modal video

  const movies = [
    { id: 1, title: "Movie 1", image: "/1.jpeg" },
    { id: 2, title: "Movie 2", image: "/2.jpeg" },
    { id: 3, title: "Movie 3", image: "/3.jpeg" },
    { id: 4, title: "Movie 4", image: "/4.jpeg" },
    { id: 5, title: "Movie 5", image: "/5.jpeg" },
    { id: 6, title: "Movie 4", image: "/6.jpeg" },
    { id: 7, title: "Movie 5", image: "/34.jpeg" },
    { id: 8, title: "Movie 4", image: "/35.jpeg" },
    { id: 9, title: "Movie 5", image: "/9.jpeg" },
    { id: 10, title: "Movie 4", image: "/10.jpeg" },
  ];
  const movies2 = [
    { id: 10, title: "Movie 4", image: "/20.jpeg" },
    { id: 2, title: "Movie 2", image: "/12.jpeg" },
    { id: 3, title: "Movie 3", image: "/13.jpeg" },
    { id: 4, title: "Movie 4", image: "/14.jpeg" },
    { id: 6, title: "Movie 4", image: "/16.jpeg" },
    { id: 7, title: "Movie 5", image: "/17.jpeg" },
    { id: 8, title: "Movie 4", image: "/18.jpeg" },
    { id: 5, title: "Movie 5", image: "/15.jpeg" },
    { id: 9, title: "Movie 5", image: "/19.jpeg" },
    { id: 1, title: "Movie 1", image: "/31.jpeg" },
  ];
  const movies3 = [
    { id: 1, title: "Movie 1", image: "/21.jpeg" },
    { id: 2, title: "Movie 2", image: "/22.jpeg" },
    { id: 3, title: "Movie 3", image: "/23.jpeg" },
    { id: 4, title: "Movie 4", image: "/24.jpeg" },
    { id: 5, title: "Movie 5", image: "/25.jpeg" },
    { id: 6, title: "Movie 4", image: "/26.jpeg" },
    { id: 7, title: "Movie 5", image: "/27.jpeg" },
    { id: 8, title: "Movie 4", image: "/28.jpeg" },
    { id: 9, title: "Movie 5", image: "/29.jpeg" },
    { id: 10, title: "Movie 4", image: "/30.jpeg" },
  ];

  return (
    <div className="relative w-full">
      {/* Hero background - full width */}
      <div className="absolute inset-0 w-full h-screen">
        <img
          src="/background_home.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
      </div>

      {/* Content container */}
      <div className="relative pt-32 pb-16 px-8 md:px-16 lg:px-24 min-h-screen flex flex-col justify-end">
        <div className="max-w-xl mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            How to say Happy Birthday in different way.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Hai, vina! hari ini adalah 10 maret 2025, dimana umur kamu sudah
            bertambah menjadi 20 tahun! yeaayy. This is how i celebrate your
            birthday, hope you like it!
          </p>

          {/* Buttons container */}
          <div className="flex flex-wrap gap-3 mt-6">
            {/* Play button untuk membuka modal video */}
            <button
              onClick={() => setShowVideo(true)}
              className="bg-white text-black px-6 py-2 rounded-md text-lg font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              <span>▶</span>
              <span>Play</span>
            </button>

            {/* More Info button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-400/50 text-white px-6 py-2 rounded-md text-lg font-medium flex items-center gap-2 hover:bg-gray-600/70 transition-colors"
            >
              <span className="text-xl">ⓘ</span>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Info */}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}

      {/* Modal Video */}
      {showVideo && (
        <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
      )}

      {/* Konten Film */}
      <div className="mt-24 space-y-10">
        <MovieRow title="Me & You!" movies={movies} />
        <MovieRow2 title="Our photos" movies={movies2} />
        <MovieRow3 title="More of us" movies={movies3} />
      </div>
    </div>
  );
}
