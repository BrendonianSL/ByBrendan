import FeaturedCard from './FeaturedCard';
import { PositionType } from '../_definitions/PositionType';

const fakeArticles = [
    {
        title: 'Something',
        subtitle: 'Something Else',
    },
        {
        title: 'Something2',
        subtitle: 'Something Else',
    },
        {
        title: 'Something3',
        subtitle: 'Something Else',
    },
];

export default function Featured() {
    return (
        <div className='flex flex-col gap-8'>
            <h2>Recent Articles</h2>
            <article className='flex gap-1 flex-col'>
                {fakeArticles.map((article, index) => <FeaturedCard key={index} position={index === 0 ? 'top' : index === fakeArticles.length - 1 ? 'bottom' : 'middle'} {...article} articleLength={fakeArticles.length} />)}
            </article>
        </div>
    )
}