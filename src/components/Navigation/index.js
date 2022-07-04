function Nav(props) {
    const { 
        sections = [], 
        currentSection, 
        setCurrentSection 
    } = props.props;

    console.log(props);

    return (
        <nav>
            <ul>
                {sections.map(section => {
                    return(
                        <li 
                            className={`${currentSection === section && 'text-danger'}`}
                            key={section}
                        >
                            {section === 'about' ? (
                                <a href='about'>About Me</a>
                            ) : (
                                <span onClick={() => setCurrentSection(section)}>
                                    {section}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;
