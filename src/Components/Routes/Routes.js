import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllBooking from "../Pages/AllBooking/AllBooking";
import BoatBooking from "../Pages/BoatBooking/BoatBooking";
import BookingLongBoat from "../Pages/BookingLongBoat/BookingLongBoat";
import CruiseBooking from "../Pages/CruiseBooking/CruiseBooking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


const route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/boat',
                element: <BoatBooking></BoatBooking>
            },
            {
                path: '/cruise',
                element: <CruiseBooking></CruiseBooking>
            },
            {
                path:'/longboat',
                element: <BookingLongBoat></BookingLongBoat>
            },
            {
                path:'/booking',
                element: <AllBooking></AllBooking>
            }
        ]
    }
])

export default route;