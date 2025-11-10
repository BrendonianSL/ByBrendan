'use client';

import { motion, spring } from 'motion/react';
import Link from 'next/link';

export default function ArticleBlock() {
    return (
        <motion.div className='bg-red-500 rounded-lg aspect-[1/1.33] flex flex-col justify-between p-4 bg-[url(/image.jpg)] text-white' whileHover={{ scale: 1.05 }} transition={{ type: spring }}>
            <Link href={'/'} className='flex flex-col justify-between h-full w-full'>
                <h3>Gachiakuta Review</h3>
                <p>Read More</p>
            </Link>
        </motion.div>
    )
}