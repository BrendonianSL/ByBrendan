'use client';

import Link from 'next/link';
import { spring } from 'motion/react';
import { motion } from 'motion/react';

export default function Header() {
    return (
        <header className='flex items-center justify-between h-[75px] px-8'>
            <img src='/longlogo.svg' alt='ByBrendan Logo' />
            <nav className='flex gap-4'>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className='rounded-lg px-4 py-2 lg:hover:bg-[#264653]' initial={{ }} transition={{ type: spring }}>
                    <Link href={'/'}>Home</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className='rounded-lg px-4 py-2 lg:hover:bg-[#2a9d8f]' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Link href={'/about'}>About</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className='rounded-lg px-4 py-2 lg:hover:bg-[#f4a261]' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Link href={'/articles'}>Articles</Link>
                </motion.div>
            </nav>
        </header>
    )
}   