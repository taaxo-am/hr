import React from 'react';

const Form = () => {
        return (
            <section id='apply' className='m-0 pt-5 px-5'>

                <div className='container px-5'>
                    <h1 className='mx-auto text-center font-nunito fw-bold'>Apply Now</h1>

                    <div className='row row-cols-1 row-cols-md-2 mt-4 gx-5 gy-3'>
                        <div className="col">
                            <div className='card bg-primary text-white'>
                                <div className="card-body">
                                    <h4 className='card-title text-uppercase text-center'>Internship </h4>
                                    <p className='text-center mx-5 mt-4'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dicta, dignissimos enim error excepturi exercitationem fugit, laborum maxime minima nemo nesciunt numquam reiciendis suscipit tempore? Iure nam quidem recusandae?</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className='card bg-primary text-white'>
                                <div className="card-body">
                                    <h4 className='card-title text-uppercase text-center'>Full Time Job</h4>
                                    <p className='text-center mx-5 mt-4'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dicta, dignissimos enim error excepturi exercitationem fugit, laborum maxime minima nemo nesciunt numquam reiciendis suscipit tempore? Iure nam quidem recusandae?</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container px-md-5 pt-4'>
                    <div className='card text-white p-5 my-5' style={{background: '#202020'}}>
                        <h2 className='card-header text-center font-roboto fw-bold'
                            style={{letterSpacing: '8px', fontSize: '38px', textShadow: '2px 2px 0p grey'}}>Fill Here to
                            apply </h2>
                        <div className='card-body mb-4'>
                            <div className="row row-cols-1 row-cols-md-2 gx-5 px-md-5 mt-4">

                                <div className='col d-flex flex-column'>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="education" className="form-label">Education Level</label>
                                        <select className="form-select" id="education">
                                            <option>Diploma</option>
                                            <option>Bachelor Degree</option>
                                            <option>Master's Degree</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cv" className="form-label">Attach Your CV</label>
                                        <input type="file" className="form-control" id="cv"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="why" className="form-label">Why Choose Us</label>
                                        <textarea className="form-control" id="why" rows="3"/>
                                    </div>
                                </div>


                                <div className='col d-flex flex-column'>
                                    <div className="mb-3">
                                        <label htmlFor="location" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="location"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="skills" className="form-label">Skills</label>
                                        <select className="form-select" id="skill">
                                            <option>Programming</option>
                                            <option>UI/UX Designing</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label">Upload Your Photo</label>
                                        <input type="file" className="form-control" id="photo"/>
                                    </div>
                                    <div className="my-4 ms-auto">
                                        <button className="btn btn-primary text-white btn-lg px-5">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
;

export default Form;
