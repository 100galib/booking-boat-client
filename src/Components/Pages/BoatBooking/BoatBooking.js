import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contex/AuthProvider';

const BoatBooking = () => {
    const [selected, setSelected] = useState(new Date());
    const { register, formState: {errors}, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    const handleBooking = data => {
        const name = data.name;
        const location = data.location;
        const ticket = data.ticketqty;
        const boat = 'Long Boat';
        const service = data.service;
        const date = format(selected, 'PP');
        const email = user?.email
        const postData = {
            name,
            location,
            ticket,
            service,
            date,
            boat,
            email
        }
        fetch(' https://boat-booking-server.vercel.app/Booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.acknowledged){
                toast.success('Item is post')
            }
        })  
    }

    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className="hero flex justify-evenly" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")` }}>
            <div className="card w-96 glass">
                <figure><img src="https://images.unsplash.com/photo-1542397284385-6010376c5337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="car!"/></figure>
                <div className="card-body">
                <h1 className='text-2xl text-center'>Booking Boat Seat</h1>
                <form onSubmit={handleSubmit(handleBooking)}>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input  {...register("name", {required: "You must give your name"})} type="text" className="input input-bordered w-full" />
                        {errors.name && <p role="alert" className='mt-2 text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <input  {...register("location", {required: "You must give your location"})} type="text" className="input input-bordered w-full" />
                        {errors.location && <p role="alert" className='mt-2 text-red-500'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">How Many Seats Do you Need ?</span>
                        </label>
                        <input  {...register("ticketqty", {required: "This Field Required"})} type="number" className="input input-bordered w-full" />
                        {errors.ticketqty && <p role="alert" className='mt-2 text-red-500'>{errors.ticketqty?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Choose Your Service</span>
                        </label>
                        <select {...register("service", {required: "This Field Required"})} className="select select-bordered w-full max-w-xs">
                        <option value={'Comfort'} selected>Comfort</option>
                        <option value={'Side'}>Side</option>
                        <option value={'Front'}>Front</option>
                    </select>
                    {errors.service && <p role="alert" className='mt-2 text-red-500'>{errors.service?.message}</p>}
                    <input className='btn w-full mt-5' type="submit" value={'Book'}/>
                    </div>
                </form>
                </div>
            </div>
            <div className="card w-96 glass text-center">
                <h1 className='text-center text-2xl'>Select Journy Date</h1>
                        <DayPicker className='flex items-center justify-center'
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
                />
            </div>
        </div>
    );
};

export default BoatBooking;