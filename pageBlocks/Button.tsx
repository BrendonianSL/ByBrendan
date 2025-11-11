'use client';

import { motion } from 'motion/react';

export default function Button({ text } : { text: string }) {
    return (
        <motion.div whileHover={{ scale: 1.1, backgroundColor: '#141414', color: 'white' }} whileTap={{ scale: 0.9 }} className='border rounded-xl border-neutral-800 px-4 py-2 lg:cursor-pointer'>
            {text}
        </motion.div>
    )
}