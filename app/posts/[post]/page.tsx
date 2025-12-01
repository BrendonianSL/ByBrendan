"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supaClient";
import Markdown from "react-markdown";

export default function Article() {
  const [blogData, setBlogData]: any = useState();

  useEffect(() => {
    async function fetchBlogData() {
      const { data, error } = await supabase.from("articles").select("*");

      if (error) {
        console.log(error);
      }

      if (data) {
        setBlogData(data);
      }
    }

    fetchBlogData();
  }, []);

  return (
    <section className="flex h-full justify-center p-8">
      <div className="max-w-(--pageMax) w-full flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-4">
          <h2>{blogData?.[0]?.title}</h2>
          <img
            className="rounded-md w-full object-cover h-full max-h-[500px]"
            src="/gachiakuta1.webp"
            alt="Gachiakuta"
          />
        </div>
        <div className="max-w-[900px] w-full flex flex-col lg:flex-row gap-8 justify-center relative">
          <div className="lg:w-[200px] w-full lg:sticky lg:top-2 self-start">
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
          </div>

          <div className="w-full">
            <Markdown>{blogData?.[0]?.content}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}
