import React from 'react';

import hero from './../assets/img/hero.png'

const Hero = () => {
    return (
        <section className='bg-white'>
            <div className='container px-5 py-5'>
                <div className="row row-cols-2 px-md-4 pt-md-4">
                    <div className='col'>
                        <div className='d-flex flex-column align-items-start justify-content-center h-100'>
                            <h1 className='font-nunito fw-bold'>Start Your Career<br/>With Muraadso</h1>
                            <p className='text-muted'>Take your dream job online. Your life career<br/>
                                will be one-stop-shop for spending, saving,<br/>budgeting, investing and more</p>
                            <a href="#apply">
                                <button className='btn btn-primary btn-lg text-white rounded-0 px-md-5 mt-5'>Apply Now
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <img className='img-fluid' src={hero} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
