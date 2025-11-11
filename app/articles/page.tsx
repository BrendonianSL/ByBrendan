'use client';

import ArticleBlock from "./_blocks/articleBlock";
import { motion } from 'motion/react';
import Button from "@/pageBlocks/Button";
import { useEffect } from 'react';
import BlogCard from "@/pageBlocks/BlogCard";
export default function Articles() {

    // On page load, grab the data from the server.
    useEffect(() => {
        // Write Server Logic Here.
    }, []);

    return (
        <section className='w-full flex flex-col items-center justify-center'>
            <div className='w-full max-w-[1000px] flex flex-col gap-8'>
                <h2>Blog Post</h2>
                <h3 className='text-neutral-500'>Take a deeper dive into some of my latest thoughts about various media.</h3>
                <div className='w-full flex flex-col  gap-4'>
                    <h3 className="text-neutral-500">Category Filters</h3>
                    <div className='flex gap-4'>
                        <Button text={"Music"} />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 max-w-[1000px] w-full'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </section>
    )
}