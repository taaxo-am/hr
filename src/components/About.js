import React from 'react';

import edOpportunity from './../assets/img/ed-opportunity.png'
import coworkers from './../assets/img/co-workers.png'
import rewards from './../assets/img/re-performance.png'

const About = () => {
    return (
        <div id='about' className='container my-5'>
            <h1 className='mx-auto text-center font-nunito'>About Muraadso</h1>

            <div className='container mt-4 p-4'>
                <div className='row row-cols-1 row-cols-md-2 gy-3'>
                    <div className='col'>
                        <div className='ratio ratio-21x9'>
                            <div className='card'>
                                <div className='card-body d-flex flex-column'>
                                    <p className='card-text m-4'>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                        vero eos et accusam et amet...
                                    </p>

                                    <button className='btn-primary btn rounded-pill px-4 text-white align-self-end me-5 mt-3'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='ratio ratio-21x9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vUDrE0EFuZM"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mx-auto text-center font-nunito mt-5'>Your Life At MURAADSO</h2>

            <div className='row row-cols-1 row-cols-md-3 mt-5 gx-5 gy-4'>
                <div className="col">
                    <div className='card text-center'>
                        <div className="card-body">
                            <img className='' style={{width: '121px'}} src={edOpportunity} alt=""/>
                            <h4 className='card-title my-3'>Education Opportunity</h4>
                            <p className='card-text text-muted'>Get resources for eveloping
                                your skills and knowledge to kick start your career</p>

                            <button className='btn btn-outline-primary rounded-pill my-4 px-4'>READ MORE</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className='card text-center'>
                        <div className="card-body">
                            <img className='' style={{width: '121px'}} src={coworkers} alt=""/>
                            <h4 className='card-title my-3'>Great Co-Workers</h4>
                            <p className='card-text text-muted'>Work with the some of the best talent in the industry
                                and build strong networks with them</p>

                            <button className='btn btn-outline-primary rounded-pill my-4 px-4'>READ MORE</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className='card text-center'>
                        <div className="card-body">
                            <img className='' style={{width: '121px'}} src={rewards} alt=""/>
                            <h4 className='card-title my-3'>Performance Rewards</h4>
                            <p className='card-text text-muted'>Get awarded for
                                better performance every month and be recognized</p>

                            <button className='btn btn-outline-primary rounded-pill my-4 px-4'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
