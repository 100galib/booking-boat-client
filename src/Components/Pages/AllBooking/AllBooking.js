import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contex/AuthProvider';

const AllBooking = () => {
    const [item, setItem] = useState(false);
    const{user} = useContext(AuthContext);
    useEffect(() => {
            fetch(` https://boat-booking-server.vercel.app/Booking?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data)
                })
        }, [])
        console.log(item)
    return (
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Ticket No</th>
                        <th>service</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            item && item.map((sItem , index) => <tr >
                                <th>{index + 1}</th>
                                <td>{sItem.name}</td>
                                <td>{sItem.location}</td>
                                <td>{sItem.ticket}</td>
                                <td>{sItem.service}</td>
                                <td>{sItem.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default AllBooking;