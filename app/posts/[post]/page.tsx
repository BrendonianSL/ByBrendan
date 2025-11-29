"use client";

import { useEffect } from "react";
export default function Article() {
  // Fetch blog data directly.
  useEffect(() => {
    // Write Logic Here.
  }, []);

  return (
    <section className="flex h-full justify-center p-8">
      <div className="max-w-(--pageMax) w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-4">
          <h2>I Am Putting Something Here For The Time Being.</h2>
          <img
            className="rounded-md w-full object-cover h-full max-h-[500px]"
            src="/gachiakuta1.webp"
            alt="Gachiakuta"
          />
        </div>
        <div className="max-w-[900px] w-full flex flex-col lg:flex-row gap-8 justify-center">
          <div className="lg:max-w-[200px] w-full grid grid-cols-2 lg:flex lg:flex-col gap-4">
            <div className="flex flex-col w-full">
              <h3>Written by:</h3>
              <p className="text-neutral-500">Brendan Lewis</p>
            </div>
            <div className="flex flex-col w-full">
              <h3>Published:</h3>
              <p className="text-neutral-500">01/01/2026</p>
            </div>
            <div className="flex flex-col w-full">
              <h3>Category:</h3>
              <p className="text-neutral-500">Anime/Manga</p>
            </div>
            <div className="flex flex-col w-full">
              <h3>Socials</h3>
              <p className="text-neutral-500">01/01/2026</p>
            </div>
          </div>
          <div className="w-full">
            <h2>I think this is a good start.</h2>
            <p className="text-neutral-500">
              I’m Brendan Lewis, a Junior Frontend Developer for the Portland
              Trail Blazers. As an Indiana University graduate, I have a deep
              background in Game Development. However, post graduation, I have
              since pivoted towards Web Development. My passion for creating
              interesting and compelling designs for players has since been
              translated to creating transformative and user-centered designs. I
              thrive on developing my skillset by tackling new projects or
              learning new languages and frameworks to better market myself for
              the future. Outside of my profession, I find myself working out at
              the gym, playing video games (a bit too much), and being around
              friends and loved ones. I also love peaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
