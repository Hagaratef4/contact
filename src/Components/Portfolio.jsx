import React from 'react';

function Portfolio() {

    return (
        <div className='port h-100 d-flex justify-content-center align-items-center p-5'>
            <div className="container p-3">
                <h1 className='fs-1 fw-bold text-uppercase pt-5'>portfolio component</h1>
                <div className='mem position-relative'>
                    <i className='fa-solid fa-star'></i>
                </div>
                <div className="row pt-4 g-4">
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                            <img id='photo' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="home" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="cake" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                        <img src="http://routeegy.github.io/startFramework/assets/images/port3.png" alt="castle" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                        <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="home" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                        <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="cake" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <div className="col col-md-4 position-relative overflow-hidden rounded-4">
                        <img src="http://routeegy.github.io/startFramework/assets/images/port3.png" alt="castle" className='w-100 rounded-4' />
                        <div className="layout h-100 d-flex justify-content-center align-items-center rounded-4">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;