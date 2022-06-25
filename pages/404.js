import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000);
    }, []);

    return (
        <div className='not-found'>
            <h1>Ох...</h1>
            <h2>Кажется такой страницы не существует</h2>
            <p>Перехожу на <Link href='/'><a>главную страницу</a></Link>...</p>
        </div>
    );
};

export default NotFoundPage;