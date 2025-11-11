import { motion } from 'motion/react';

export default function BlogCard() {
    return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex flex-col justify-between rounded-lg h-[400px] overflow-hidden bg-red-500 lg:cursor-pointer"
        >
        <img
            className="object-cover w-full h-full"
            src="/gachiakuta1.webp"
            alt="Background"
        />
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10"
        >
            <img
            className="object-cover w-full h-full"
            src="/gachiakuta2.webp"
            alt="Overlay"
            />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-20 pointer-events-none">
            <h3>Sample Heading</h3>
            <p>Read More</p>
        </div>
    </motion.div>
    )
}