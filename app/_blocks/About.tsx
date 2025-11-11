export default function About() {
    return (
        <section className='flex gap-4 w-full'>
            <div className='w-full flex items-center justify-center'>
                <figure className='overflow-hidden rounded-full h-[300px] w-[300px]'>
                    <img className='w-full h-full object-cover' src='/brendan_1.jpg' alt='Picture of Brendan' />
                </figure>
            </div>
            <div className='w-full'>
                <h2>Hey, I'm Brendan!</h2>
                <p className='mt-4'>
                    I'm a Junior Frontend Web Developer with a deep interest and passion for nerd culture. My passions for games started with my first ever console, the Playstation 2. This
                    served as the catalyst for a lifelong hobby that would shape my life and career forever. This passion for video games branched out to other forms of media as I got
                    older such as music, movies, manga, shows, and so much more! With how much passion I have for these things, I want to create an outlet that serves two purposes.
                    First, I want to share my passions with others to express why I think these things are awesome. Second, I want to create a place where I can advance my technical skills
                    in programming by creating a full stack application.
                </p>
            </div>
        </section>
    )
}