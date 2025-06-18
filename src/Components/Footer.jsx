import React from 'react';

function Footer() {
    return (
        <div className='fter'> 
            <div className='container p-5'>
                <div className="row row-cols-3 ">
                    <div className="col card text-center border border-0">
                        <h5 className="card-title text-uppercase fs-3 pb-2">location</h5>
                        <h6 className="card-subtitle mb-2 pb-3">2215 John Daniel Drive</h6>
                        <p className="card-text">Clark, MO 65243</p>
                    </div>
                    <div className="col card text-center border border-0">
                        <h5 className="card-title text-uppercase fs-3 pb-2">AROUND THE WEB</h5>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <div className='icon rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-brands fa-facebook fs-6"></i>
                            </div>
                            <div className='icon rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-brands fa-twitter fs-6"></i>
                            </div>
                            <div className='icon rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-brands fa-linkedin fs-6"></i>
                            </div>
                            <div className='icon rounded-circle d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-globe fs-6"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center border border-0">
                        <h5 className="card-title text-uppercase fs-3 pb-2">ABOUT FREELANCER</h5>
                        <h6 className="card-subtitle mb-2">Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
                    </div>
                </div>
            </div>
            <div className='bg-dark text-white p-3 fs-5'>
                <p>Copyright © Your Website 2021</p>
            </div>
        </div>
    );
}

export default Footer;