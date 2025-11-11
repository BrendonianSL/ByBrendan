'use client';

import Image from "next/image";
import { useEffect } from 'react';
import Header from "@/pageBlocks/Header";
import { motion } from 'motion/react';
import BlogContainer from "./_blocks/BlogContainer";
import About from './_blocks/About';

export default function Home() {

  return (
    <div className={`flex min-h-screen items-center justify-center font-sans`}>
      <main className="max-w-[1000px] w-full flex flex-col gap-16">
        <section className='w-full h-full flex flex-col gap-4'>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="50" height="50" rx="8" fill="#FBA272"/>
            <rect x="12" y="12" width="25" height="25" fill="url(#pattern0_12_2)"/>
            <defs>
              <pattern id="pattern0_12_2" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_12_2" transform="scale(0.0111111)"/>
              </pattern>
              <image id="image0_12_2" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVR4nO2c24tXVRTHlw6OloO3iiFL8ILlg4hOPQiBYKiVFzBBjcoUQaEXyeilB1+6DPag9hCUPg1DSYUIovPgLbzQRQiFREQCywgvQVlqzW+cZj6xcP9iRmfmd8Y5Z5+9z1mfP2Dvtb6sfVt77yViGIZhGIZhGIZhGIZhZAYwAZgPvAHsBNqAs8A14A+giwCQ2ABGAkuBD4EfgG4iQGIAGAYsAlqBP4kQCRmgAdgEXCByJESAemAjcIWCIKEBLAZ+pmBIKAAPAbspKBICQBNwkQIjeQOsBSoUHMlZ5NdDOVBkTZ4iv0mJkJxEfrEskVwlD5FnA7coGZLDQUQTPqVDPAv9DiVFPIo8GeigpIhHoT+hxIgnkR8rw6EkBKHfpuSIJ6FPU3LEg8hT83ayLEK/Stx0xSL0duKlA1gXi9BfEScV4AXggViEPk+kIssd+8fFIvRV4psulvWwf2YsQrcTYSRXAVak0bBkDXCbCCO5CrAjjcYla9z7t+giuQpwLo0OJGsiuN2uDCDy3LQ68SH0YSIUWQFaUurnX8ka4CPiFLkpxXvNv30I/TLxiTwcOJlif9d95aK7YxFZAZpT7vOq+AA4QTwir8mg34u+hF5PHCIvyegm6JQvoUcAvxDYYaQnwPMZnmIPiC+ADZRTZKXFp9C6kn9LeaaLnjR7E9o5NQ34i3KJrKz3p3LvYdpJ8aeLnszzp3BvJ1dn+GqpElAkV5noT917nZ2fwTTSEVgkK9f8qdq/07Pc79eiRrKyXwL6ctw8xHm7EqjIyhYJCWC6+/7WVSCRlWclRIAZ7kP99QRO/BO4yLoG1UuoAHOASzWcuAksCGzhu5svJVTcE7L2Gg5oLY6mgCO5yhoJDaAO2JrA+AvAE4FHcnXaGC0hATwOHE1gfBswJoJIVj6WkHCnxFpPErqB9zXqE7QVwj8ZtXe2BFQLSSvKJNlZvBTZd+d9flSsXbZHb1x+S2Dwr8DTCdrcQjjkH83AU8DXCQ3+Bni0RnujEo4Kn/hL8vdzCGlNOLQ73e5jwI2+ZsSA7wgLHaUP+1O2dwR/pi91Ehr6oz7DktrtPglcJix0yljhR9k7IugL+VeA44MwsssVB2wYRB/nCItmXwvcc8Cn91GX7vskUdxPilWP4SGwV+9ExcOl6+f3YdzvbktWN8SKYp3kyx4viSNXYXEwaBS+B4xPqf9VOR5Sdg0lULIq2aMCbwMeycCGBQnTqmlxw3vCCFhYwygtFvgWMDZjOyYBxzzNx1Oz9GWghXB3H8fmL1wWzc/Qkv/Xi9cy+GWgu6JDwDO+fBnIQR2+m4HlwIM521PvXoUeHMQevq99sV4cvwtMydOfKAAagZXAB8ARt/++7PLVt13m8CfgjN6IuIVas4CNedtuGIZhGIZhGIZhGIYhBeE/knk0E+DO9m4AAAAASUVORK5CYII="/>
            </defs>
          </svg>
          <h2>ByBrendan</h2>
          <h3 className='text-neutral-500'>Welcome to my blog website where I discuss topics that interest me, such as video games, movies, manga, anime, music, and more!</h3>
        </section>
        <BlogContainer />
        <About />
      </main>
    </div>
  ); 
}
