export default function FeaturedCard({ title, subtitle } : { title: string, subtitle: string }) {
    return (
        <div className='bg-neutral-300 w-full rounded-lg p-8 lg:hover:cursor-pointer flex flex-between items-center'>
            <div className='grow'>
                <h4>Placeholder Title For Placeholder Article</h4>
            <p className='text-neutral-500'>This is something that I think is truly special.</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 13V9M15 9H11M15 9L9 15M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}