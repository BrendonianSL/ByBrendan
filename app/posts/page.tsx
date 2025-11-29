"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import PostBlock from "./_blocks/PostBlock";
import { Button } from "@/components/ui/button";

export default function Articles() {
  // On page load, grab the data from the server.
  useEffect(() => {
    // Write Server Logic Here.
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-16 px-8">
      <div className="w-full max-w-(--pageMax) flex flex-col gap-8">
        <h1>Blog Post</h1>
        <div className="flex gap-2">
          <Button
            className="lg:hover:cursor-pointer dark:text-white"
            size="sm"
            variant="outline"
          >
            Video Games
          </Button>
          <Button
            className="lg:hover:cursor-pointer dark:text-white"
            size="sm"
            variant="outline"
          >
            Anime
          </Button>
          <Button
            className="lg:hover:cursor-pointer dark:text-white"
            size="sm"
            variant="outline"
          >
            Movies
          </Button>
          <Button
            className="lg:hover:cursor-pointer dark:text-white"
            size="sm"
            variant="outline"
          >
            Music
          </Button>
        </div>
        <div className="flex flex-col max-w-(--pageMax) w-full">
          <PostBlock />
          <PostBlock />
          <PostBlock />
          <PostBlock />
        </div>
      </div>
    </section>
  );
}
