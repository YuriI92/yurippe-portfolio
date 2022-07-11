import Nav from '../Navigation';

function Header(props) {
    return(
        <header className='pt-3 pt-sm-1 px-sm-3 px-xl-5 py-xl-2'>
            <div className='d-flex flex-column flex-sm-row justify-content-sm-between text-center text-sm-left'>
                <h1>
                    <a href='/' className='text-decoration-none'>
                        Yuri Ichikawa
                    </a>
                </h1>
                <Nav
                    props={props}
                />
            </div>
        </header>
    );
}

export default Header;
