import React from 'react';

const Subscribe = () => {
    return (
        <div id='contact' className='container px-5 py-4 my-5 text-white'>
            <div className="row row-cols-1 row-cols-md-2 rounded bg-info gx-5 py-5 px-5 mt-4 mx-0">
                <div className='col'>
                    <h3>Noo reeb email-kaaga</h3>
                    <p>Si aad ula socotid fursadaha cusub ee Banaan</p>
                </div>
                <div className="col">
                    <form className='h-100'>
                        <div className='d-flex align-items-center h-100'>
                            <input className='form-control' type="text" placeholder='Email'/>
                            <button className='btn btn-light ms-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
