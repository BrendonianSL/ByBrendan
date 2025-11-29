"use client";

import BlogContainer from "./_blocks/BlogContainer";
import Featured from "./_blocks/Featured";
import Footer from "./_blocks/Footer";
import { useThemeStore } from "./_state/Theme";
import Intro from "./_blocks/Intro";

export default function Home() {
  // Set variable equal the current theme.
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-center font-sans`}
    >
      <main className="max-w-200 w-full flex flex-col gap-16 pt-16">
        <Intro />
        <BlogContainer />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}
