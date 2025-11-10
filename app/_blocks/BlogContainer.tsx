import BlogCard from './BlogCard';

export default function BlogContainer() {
    return (
        <section className='grid grid-cols-4 gap-4'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
    )
}