'use client';

import Header from './_blocks/Header';
import { motion } from 'motion/react';
import BlogContainer from "./_blocks/BlogContainer";
import Featured from './_blocks/Featured';
import Connect from './_blocks/Connect';
import Footer from './_blocks/Footer';

export default function Home() {

  return (
    <div className={`flex flex-col min-h-screen items-center justify-center font-sans`}>
      <Header />
      <main className="max-w-[1000px] w-full flex flex-col gap-16">
        <section className='w-full h-full flex flex-col gap-4'>
          <h1>Welcome to ByBrendan! &#128518;</h1>
          <h3 className='text-neutral-500'>
            Heya! I'm Brendan, a Junior Front End Web Developer during the day, and a fun, goofy nerd 24/7! When I'm not developing
            web experiences, I like to share my thoughts on various topics such as video games, movies, anime, manga, music, and so much more!
            I write here to share my thoughts and passions on these topics with the world!
          </h3>
        </section>
        <section>
          <h2>Featured Post</h2>
        </section>
        <BlogContainer />
        <Featured />
        <Connect />
      </main>
      <Footer />
    </div>
  ); 
}
