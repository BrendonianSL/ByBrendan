import ArticleBlock from "./_blocks/articleBlock"
export default function Articles() {
    return (
        <section>
            <div className='w-full'>

            </div>
            <div className='grid grid-cols-3 gap-4 max-w-[1000px] w-full'>
                <ArticleBlock />
                <ArticleBlock />
                <ArticleBlock />
            </div>
        </section>
    )
}