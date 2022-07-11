function Footer() {
    return (
        <footer className='p-2 d-flex justify-content-center'>
            <a 
                href='https://github.com/YuriI92' 
                target='_blank' rel='noopener noreferrer'
                className='text-decoration-none m-2'
            >
                <i className='ri-github-fill'></i>
            </a>
            <a 
                href='https://www.linkedin.com/in/yuri-ichikawa-4073564a/'
                target='_blank' rel='noopener noreferrer'
                className='text-decoration-none m-2'
            >
                <i className='ri-linkedin-box-fill'></i>
            </a>
            <a 
                href='https://stackexchange.com/users/23724241/yuri-i' 
                target='_blank' rel='noopener noreferrer'
                className='text-decoration-none m-2'
            >
                <i className='ri-stack-overflow-line'></i>
            </a>
        </footer>
    );
}

export default Footer;
