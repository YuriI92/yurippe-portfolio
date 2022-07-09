import { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'Deep Thoughts',
            technology: [
                'MERN Stack'
            ],
            url: 'https://morning-coast-59682.herokuapp.com/',
            github: 'https://github.com/YuriI92/deep-thoughts',
            image: 'deep-thoughts.png',
            description: 'Deep Thoughts home page screen capture'
        },
        {
            name: 'dEv-Commerce',
            technology: [
                'Node',
                'Handlebars',
                'Tailwind CSS',
                'API'
            ],
            url: 'https://hidden-springs-42898.herokuapp.com/',
            github: 'https://github.com/proj-2/E-Commerce-Website',
            image: 'dev-commerce.png',
            description: 'dEv-Commerce homepage screen capture showing a logo with a computer and coding icon and search form'
        },
        {
            name: 'Yurippe BudgeTracker',
            technology: [
                'PWA',
                'Express.js',
                'Service Worker',
                'MongoDB'
            ],
            url: 'https://enigmatic-everglades-13899.herokuapp.com/',
            github: 'https://github.com/YuriI92/yurippe-budget-tracker',
            image: 'yurippe-budgetracker.png',
            description: 'Yurippe BudgeTracker home page screen capture'
        },
        {
            name: 'Yurillium Tech Blog',
            technology: [
                'Handlebars',
                'Sequelize',
                'Express.js',
                'Session'
            ],
            url: 'https://quiet-headland-91755.herokuapp.com/',
            github: 'https://github.com/YuriI92/yurilium-tech-blog',
            image: 'yurillium-tech-blog.jpg',
            description: 'technology and network connection'
        },
        {
            name: 'Music Slayers',
            technology: [
                'JavaScript',
                'Tailwind CSS'
            ],
            url: 'https://project01-team14.github.io/Music-Slayers/',
            github: 'https://github.com/Project01-Team14/Music-Slayers',
            image: 'music-slayers.png',
            description: 'Music Slayers home page screen capture showing pictures of some album covers'
        },
        {
            name: 'Run Buddy',
            technology: [
                'HTML',
                'CSS',
            ],
            url: 'https://yurii92.github.io/run-buddy/',
            github: 'https://github.com/YuriI92/run-buddy',
            image: 'run-buddy.png',
            description: 'Run Buddy homepage screen capture saying Start Building Habits'
        },
    ]);
    const [currentProject, setCurrentProject] = useState();
    
    

    return (
        <div>
            <h2>Portfolio</h2>
            <div>
                {projects.map(project => (
                    <article>
                        <img src={require(`/src/assets/project/${project.image}`)} alt={project.description} />
                        <h3>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">                    
                                {project.name}
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">                    
                                <i className='ri-github-fill'></i>
                            </a>
                        </h3>
                        <ul>
                            {project.technology.map(technology => (
                                <li>{technology}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Project;
