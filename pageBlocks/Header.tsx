import { motion } from 'motion/react';

export default function Header() {
    return (
        <header>
            <nav className='flex gap-4'>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: 5 }} className='navButton lg:hover:bg-[#7F96FF]'>Home</motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: 5 }} className='navButton lg:hover:bg-[#81C5BE]'>About Me</motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8, rotate: 5 }} className='navButton lg:hover:bg-[#FFA799]'>Articles</motion.div>
            </nav>
        </header>
    );
}