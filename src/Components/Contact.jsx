import React from 'react';

function Contact() {
    return (
        <div className='port h-100 d-flex justify-content-center align-items-center p-5'>
            <div className="container p-3 d-flex justify-content-center align-items-center flex-column">
                <h1 className='fs-1 fw-bold text-uppercase pt-5'>conatct section</h1>
                <div className='cont position-relative'>
                    <i className='fa-solid fa-star'></i>
                </div>

                <form className='w-75 d-flex flex-column pt-4'>
                    <label for="userName" className='text-start pb-2'>userName :</label>
                    <input type="text" placeholder='userName' id='userName' className='form-control border border-0 border-bottom py-3 mb-1' />

                    <label for="userAge" className='text-start pb-2'>userAge :</label>
                    <input type="text" placeholder='userAge' id='userAge' className='form-control border border-0 border-bottom py-3 mb-1' />

                    <label for="userEmail" className='text-start pb-2'>userEmail :</label>
                    <input type="text" placeholder='userEmail' id='usEmail' className='form-control border border-0 border-bottom py-3 mb-1' />

                    <label for="userPassword" className='text-start pb-2'>userPassword :</label>
                    <input type="text" placeholder='userPassword' id='userPassword' className='form-control border border-0 border-bottom py-3 mb-1' />
                
                    <button type='button' className='btn d-flex align-self-start mt-4 px-3 py-2 border border-0 rounded-2 text-white'>send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;