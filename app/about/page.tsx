'use client';
import {motion} from 'motion/react';
import images from './_data/images'; // Import for our images.
import { useState } from 'react';

export default function About() {

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <section className='flex items-center justify-center gap-4 w-full h-full px-8'>
            <div className='w-full flex items-center justify-center'>
                <motion.figure onClick={() => setImageIndex((prev) => (prev + 1))} whileHover={{ scale : 1.1 }} whileTap={{ scale: 0.9 }} className='h-[600px] w-[600px] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={images[imageIndex % images.length]} alt='Brendan' />
                </motion.figure>
            </div>
            <div className='w-full'>
                <h2>Hey, I'm Brendan!</h2>
                <p className='max-w-[700px]'>I'm a Junior Frontend Web Developer with a deep interest and passion for nerd culture. My passions for games started with my first ever console, the Playstation 2. This
                    served as the catalyst for a lifelong hobby that would shape my life and career forever. This passion for video games branched out to other forms of media as I got
                    older such as music, movies, manga, shows, and so much more! With how much passion I have for these things, I want to create an outlet that serves two purposes.
                    First, I want to share my passions with others to express why I think these things are awesome. Second, I want to create a place where I can advance my technical skills
                    in programming by creating a full stack application.
                </p>
                <br></br>
                <p className='max-w-[700px]'>
                    I have a lot of favorites as I play mostly anything and everything. Currently, my interest include Gachiakuta, Battlefield 6, Street Fighter 6, Tekken 8, Warframe, and so much more!
                </p>
            </div>
        </section>
    )
}