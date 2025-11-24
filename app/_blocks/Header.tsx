'use client';

import Link from 'next/link';
import { spring } from 'motion/react';
import { motion } from 'motion/react';

export default function Header() {
    return (
        <header className='flex items-center justify-between h-[75px] px-8 w-full'>
            <div className='flex gap-4'>
                <img className='rounded-lg w-12 h-12 object-cover' src='/brendan_2.jpg' alt='Picture of Brendan' />
                <div className='flex flex-col gap-2'>
                    <span>Brendan Lewis</span>
                    <p>Nerd Enthusiast</p>
                </div>
            </div>
        </header>
    )
}   