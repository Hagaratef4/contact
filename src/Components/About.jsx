import React from 'react';

function About() {
    return (
        <div className='home vh-100 d-flex justify-content-center align-items-center'>
            <div className="container w-75">
                <h1 className='fs-1 fw-bold text-uppercase'>about component</h1>
                <div className='star position-relative'>
                    <i className='fa-solid fa-star'></i>
                </div>
                <div className="row text-start pt-4">
                    <div className="col col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;