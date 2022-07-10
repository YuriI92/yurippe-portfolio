import { capFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const { 
        sections = [], 
        currentSection, 
        setCurrentSection 
    } = props.props;

    return (
        <nav className='mt-1 mx-2 mt-sm-2'>
            <ul className='d-flex flex-wrap justify-content-center justify-content-sm-end list-unstyled'>
                {sections.map(section => {
                    return(
                        <li 
                            className={`p-1 m-1 ${currentSection === section && 'text-danger'}`}
                            key={section}
                        >
                            {section === 'about' ? (
                                <a href='about' className={`text-decoration-none ${currentSection === section ? 'text-danger' : 'text-body'}`}>About Me</a>
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
