import Head from "next/head";


const Reviews = ({reviews}) => {

    return (
        <>
            <Head>
                <title>Сочные бургеры | Главная</title>
            </Head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className='reviews'>
                    {!!reviews.length && reviews.map(res => {
                        return (
                            <div key={res.id} className='review'>
                                {res.id} {' '}
                                {`${res.body.slice(0, 90)}...`}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
    const data = await response.json();

    return {
        props: {
            reviews: data
        }
    }
}


export default Reviews;