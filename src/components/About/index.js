import profilePic from '../../assets/profile/yurippe.jpg';

function About() {
    return (
        <section className='row'>
            <h2 id='about' className='col-12 d-sm-flex py-1'>
                About Me
            </h2>
            <div className='col-12'>
                <div className='justify-content-center justify-content-sm-start row'>
                    <div className='col-12 col-sm-3'>
                        <div className='my-3 pr-sm-2'>
                            <img 
                                src={profilePic} 
                                alt='Yuri Ichikawa' 
                                className='img-fluid rounded-circle shadow'
                            />
                        </div>
                    </div>
                    <div className='col-sm-8 text-center text-sm-left p-1 mt-2 ml-sm-4 mr-sm-2'>
                        <p>
                            Odio mucius quaerendum eu mea. Error fuisset antiopam ius ei, his commodo imperdiet in, id 
                            natum atomorum voluptatibus per. Mea ignota nostro ea, qui tollit torquatos persequeris cu. 
                            Fastidii reprimique ne nam, case vocent ocurreret ne eos, nam elitr insolens et. Sale inani 
                            perfecto sea no, ea justo dicam mea.<br/>
                            <br/>
                            Eu per quot conceptam, eum te aperiam fabulas mentitum, falli latine corpora vim an. Ex duo 
                            enim menandri, prima ignota denique et sea, nulla munere alienum sea at. Has luptatum pertinax 
                            evertitur at. At cum eius alterum nusquam, tollit eruditi has ex, in case dicam libris sed.
                        </p>
                    </div>
                </div>
            </div>  
        </section>
    );
}

export default About;
