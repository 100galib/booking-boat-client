import React, {useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const [getError, setError] = useState('');
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    let showError = getError.slice(getError.indexOf('w'), getError.indexOf(')'));
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data)
        setError('')
        loginUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user)
        })
        .catch(error => {setError(error.message)});
    }
    return (
        <div className="h-96 flex justify-center items-center my-10">
        <div className='shadow-xl w-96 p-7'>
            <h1 className='text-center text-3xl font-bold'>LogIn</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                    <label className="label"> 
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input  {...register("email", {required: "Email Address is required"})} type="text" className="input input-bordered w-full" />
                    {errors.email && <p role="alert" className='mt-2 text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> 
                        <span className="label-text font-bold">Password</span>
                    </label>
                    <input  {...register("password", {required: "Password is required"})} type="password" className="input input-bordered w-full" />
                    {errors.password && <p role="alert" className='mt-2 text-red-500'>{errors.password?.message}</p>}
                    {getError && <p className='mt-2 text-red-500'>{showError}</p> }
                </div>
                <label className="label"> 
                        <span className="label-text"><button>Forgot Password</button></span>
                </label>
                <input className='btn w-full' type="submit" value={'Login'}/>
            </form>
            <p className='text-xs text-center mt-3'>New To Doctor Portal ? <Link to={'/registration'} className='text-secondary'>Create new account</Link></p>
        </div>
    </div>
    );
};

export default Login;