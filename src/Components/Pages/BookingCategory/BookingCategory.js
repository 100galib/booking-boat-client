import React from 'react';
import { Link } from 'react-router-dom';

const BookingCategory = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-8'>
            <div className="card card-compact w-full lg:w-72 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Boat</h2>
                    <p>If You want to ride alone then book your boat.</p>
                    <div className="card-actions justify-end">
                    <Link to={'/boat'}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full lg:w-72 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1516495312540-a148643b22d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Cruise</h2>
                    <p>Get Your luxurious Cruise Now</p>
                    <div className="card-actions justify-end">
                    <Link to={'/cruise'}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full lg:w-72 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Long Boat</h2>
                    <p>Get Grip For Family Trip</p>
                    <div className="card-actions justify-end">
                    <Link to={'/longboat'}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full lg:w-72 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Boat</h2>
                    <p>If You want to ride alone then book your boat.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCategory;