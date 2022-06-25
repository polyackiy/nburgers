import Link from 'next/link'
import {GiHamburger} from 'react-icons/gi'

const Header = () => {
    return (
        <header>
            <div>
                <GiHamburger/>
            </div>
            <nav>
                <Link href='/'><a>Домой</a></Link>
                <Link href='/about'><a>О нас</a></Link>
                <Link href='/reviews'><a>Отзывы</a></Link>
                <Link href='/burgers'><a>Бургеры</a></Link>
            </nav>
        </header>
    );
};

export default Header;