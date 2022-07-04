import { capFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const { 
        sections = [], 
        currentSection, 
        setCurrentSection 
    } = props.props;

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
                                    {capFirstLetter(section)}
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
