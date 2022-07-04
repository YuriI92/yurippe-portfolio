import Nav from '../Navigation';

function Header(props) {
    return(
        <header>
            <h1>
                <a href='/'>Yuri Ichikawa</a>
            </h1>
            <Nav
                props={props}
            />
        </header>
    );
}

export default Header;
