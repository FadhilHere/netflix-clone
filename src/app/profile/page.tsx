"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const profiles = [
  { name: "Seelie", img: "/33.jpeg" }, // Bisa portrait
  { name: "Selvina", img: "/19.jpeg" }, // Bisa landscape
];

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-semibold mb-8">
        Who's watching?
      </h1>
      <div className="flex gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:opacity-80"
            onClick={() => router.push("/home")}
          >
            {/* Wrapper untuk Clipping Mask */}
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
              <Image
                src={profile.img}
                alt={profile.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-lg">{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
