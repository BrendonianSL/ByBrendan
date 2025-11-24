import { motion } from 'motion/react';
import FeaturedCard from './FeaturedCard';

const fakeArticles = [
    {
        title: 'Something',
        subtitle: 'Something Else',
    }
]
export default function Featured() {
    return (
        <>
            <h2>Recent Articles</h2>
            <article className='flex gap-2 flex-col'>
                {fakeArticles.map((article, index) => (
                    <FeaturedCard key={index} {...article}/>
                ))}
            </article>
        </>
    )
}