import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <div>
            <>
                <header>
                    <b> Vivekanad College</b>
                    <nav>
                        <Link to="/home"> Home </Link>
                        <Link to="/about"> About </Link>
                        <Link to="/courses"> Courses</Link>
                    </nav>
                </header>
            </>
        </div>
    )
}

export default Header;
