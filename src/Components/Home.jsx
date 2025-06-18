import React from 'react';

function Home() {
    return (
        <div className='home vh-100 d-flex justify-content-center align-items-center'>
            <div className="container">
                <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="avataaars" className='pb-2' />
                <h1 className='text-uppercase fs-2 fw-bold py-3'>start framework</h1>
                <div className='star position-relative'>
                    <i className='fa-solid fa-star'></i>
                </div>
                <p className='pt-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    );
}

export default Home;