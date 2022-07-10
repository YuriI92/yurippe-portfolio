import React from 'react';

function Resume(props) {    
    const frontend = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'responsive design',
        'React',
        'Bootstrap'
    ]

    const backend = [
        'APIs',
        'Node',
        'Express',
        'MySQL, Sequelize',
        'MongoDB, Mongoose',
        'REST',
        'GraphQL'
    ]

    return (
        <section>
            <h2>Resume</h2>
            <p>
                Download my {' '}
                <a 
                    href='https://drive.google.com/uc?export=download&id=1WG3b3iJjni_fV5iPW1SurXkA_xO6K9Uo'
                    download
                >
                    resume
                </a>
            </p>
            <article>
                <h3>Front-end Proficiencies</h3>
                <ul>
                    {frontend.map(map => (
                        <li key={map}>{map}</li>
                    ))}
                </ul>
            </article>
            <article>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    {backend.map(map => (
                        <li key={map}>{map}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default Resume;
