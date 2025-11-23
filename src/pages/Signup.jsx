import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {

    const { register ,handleSubmit, reset, formState: {errors}} = useForm()

    const handleSignup = (data) =>{
            console.log(data);
            reset();
    }

    return (
        <div>
            <form className='space-y-4 min-w-md' onSubmit={handleSubmit(handleSignup)}>
                <div>
                    <label className='block'>Email</label>
                    <input {...register("email", {required: true})} type="email" name="email" className='px-4  py-2 border w-full' />
                    {errors.email && <p>Email is required</p>}
                </div>
                <div>
                    <label className='block'>Password</label>
                    <input {...register("password", {required: true})} type="password" name="password" className='px-4 py-2 border w-full ' />
                     {errors.password && <p>password is required</p>}
                </div>
                <div>

                    <button type="submit" name="email" className='px-4 py-2 border w-full cursor-pointer'>SignUp</button>
                </div>
            </form>

        </div>
    );
};

export default Signup;