import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import signups from '../../Assets/Form/signup.jpg'
import { ContextAuth } from '../../Context/UseContext';
import Tokenhooks from '../../Tokenhooks/Tokenhooks';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signup, profileupdate, signingoogle, signingithub } = useContext(ContextAuth);
    const [signuperror, setSignuperror] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [usercreate, setUsercreate] = useState('');
    const [tokens] = Tokenhooks(usercreate)

    if (tokens) {
        navigate(from, { replace: true })
    }

    const Handlesignup = (data) => {
        setSignuperror('');
        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success(' Sign up successfull');


                const infouser = {
                    displayName: data.name
                };

                profileupdate(infouser)
                    .then(() => {
                        usersave(data.email, data.name)


                    }).catch(err => console.log(err));



            }).catch(error => {

                setSignuperror(error.message);
                error(error.message);
            })
    };
    const seller = (e) => {
        const valu = e.value;
        console.log(valu)
    }



    const handlegoogle = () => {
        signingoogle()
            .then(result => {
                const user = result.user;
                toast.success('login success')
                navigate(from, { replace: true })
            }).catch(error => {

                toast.error(error.message);
                error(error.message);
            })
    }

    const githublogin = () => {
        signingithub()
            .then(result => {
                const user = result.user;
                toast.success('login success')
                navigate(from, { replace: true })
            }).catch(error => {

                toast.error(error.message);
                error(error.message);
            })
    }


    const usersave = (email, name) => {
        const user = { email, name };
        fetch('https://assignment-12-server-nine.vercel.app/saveduser', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('user saved', data)
                setUsercreate(email)
                // userToken(email)
                //  navigate(from, { replace: true })
            })
    }


    // const userToken = (email) => {
    //     fetch(`http://localhost:5000/jwttoken?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken',data.accessToken)
    //                 navigate(from, { replace: true })
    //         }
    //     })
    // }

    return (
        <div className='my-12'>


            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signups} alt="" />
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div className=' flex justify-center items-center '>
                            <div className='w-96 shadow-xl px-6 py-8 rounded-lg'>
                                <h1 className='text-4xl font-bold text-center'>Sign up</h1>
                                <form onSubmit={handleSubmit(Handlesignup)}>

                                    <label onClick={seller} htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:te">
                                        <span>Left</span>
                                        <span className="relative">
                                            <input  id="Toggle1" type="checkbox" className="hidden peer" />
                                            <div className="w-10 h-6 rounded-full shadow-inner bg-black ">

                                            </div>
                                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-slate-300"></div>
                                        </span>
                                        <span>Right</span>
                                    </label>

                                    <div className="form-control w-full  mb-2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>


                                        <input
                                            {...register("name", { required: " name is required" })} className="input input-bordered w-full " type="text" />

                                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                                    </div>


                                    <div className="form-control w-full  mb-2">
                                        <label className="label">
                                            <span className="label-text">Username
                                            </span>
                                        </label>


                                        <input
                                            {...register("Username", { required: "Username is required" })}

                                            className="input input-bordered w-full " type="text" />
                                        {errors.Username && <p className='text-red-600' role="alert">{errors.Username?.message}</p>}
                                    </div>



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
                                                minLength: { value: 6, message: 'password must be 6 character longer' }

                                            })}

                                            className="input input-bordered w-full " type="password" placeholder='6+ characters' />
                                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                                    </div>

                                    <input className='btn btn-secondary w-full' value="Create Account " type="submit" />
                                </form>
                                {
                                    signuperror && <p className='text-red-700'> {signuperror} </p>
                                }
                                <p className='my-2'>Already a member?<Link to='/Signin' className='text-primary font-semibold' >Sign In</Link></p>
                                <div className="flex flex-col w-full border-opacity-100 my-2">
                                    <div className="divider">OR</div>
                                </div>

                                <div className="flex justify-center space-x-4">
                                    <button onClick={handlegoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                        </svg>
                                    </button>

                                    <button onClick={githublogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;