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
        <section className=''>
            <h2 className='d-sm-flex py-1'>
                Resume
            </h2>
            <p className='my-4 ml-5'>
                Download my {' '}
                <a 
                    href='https://drive.google.com/uc?export=download&id=1WG3b3iJjni_fV5iPW1SurXkA_xO6K9Uo'
                    download
                >
                    resume
                </a>
            </p>
            <div className=''>
                <article className='ml-3'>
                    <h3>Front-end Proficiencies</h3>
                    <ul className='text-left ml-3'>
                        {frontend.map(map => (
                            <li key={map}>{map}</li>
                        ))}
                    </ul>
                </article>
                <article className='ml-3'>
                    <h3>Back-end Proficiencies</h3>
                    <ul className='text-left ml-3'>
                        {backend.map(map => (
                            <li key={map}>{map}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Resume;
