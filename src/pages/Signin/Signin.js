import React, { useState } from 'react';
import { useContext } from 'react';
import signins from '../../Assets/Form/signin.jpeg';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ContextAuth } from '../../Context/UseContext';

const Signin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signin, signingoogle } = useContext(ContextAuth);
    const [signinerror, setSigninerror] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handlesignin = (data) => {
        setSigninerror('');
        signin(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Sign In successfull')
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
                setSigninerror(error.message);
            })
    }

    const handlegoogle = () => {
        signingoogle()
            .then(result => {
                const user = result.user;
                toast.success('login success')
            }).catch(error => {

                toast.error(error.message);
                error(error.message);
            })
    }

    return (
        <div className='my-12'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>

                        <img src={signins} alt="" />

                    </div>
                    <div>
                        <div className=' flex justify-center items-center '>
                            <div className='w-96 shadow-xl px-6 py-8 rounded-lg'>
                                <h1 className='text-4xl font-bold text-center'>Login</h1>
                                <form onSubmit={handleSubmit(handlesignin)}>

                                    <div className="form-control w-full  mb-2">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>


                                        <input
                                            {...register("email", { required: "Email Address is required" })}

                                            className="input input-bordered w-full " type="email" />
                                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                                    </div>


                                    <div className="form-control w-full  mb-2">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>


                                        <input
                                            {...register("password", {
                                                required: "password is required",
                                                minLength: { value: 6, message: 'password must be 6 character longer' },
                                                // pattern:{value:/\[([0-9A-Z:]+)\]/,message:'password must be strong'}

                                            })}

                                            className="input input-bordered w-full " type="password" />
                                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                                        <label className="label">
                                            <span className="label-text-alt font-bold">Forgot Password ?</span>
                                        </label>
                                    </div>

                                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                                </form>
                                {
                                    signinerror && <p className='text-red-700'> {signinerror} </p>
                                }
                                <p className='my-2'>Not a member?<Link className='text-primary font-semibold' to='/Signup'>Sign up now</Link></p>
                                <div className="flex flex-col w-full border-opacity-100 my-2">
                                    <div className="divider">OR</div>
                                </div>
                                <input onClick={handlegoogle} className='btn btn-outline w-full' value="CONTINUE WITH GOOGLE" type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;