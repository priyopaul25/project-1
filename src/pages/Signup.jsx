import React from 'react';

const Signup = () => {




    return (
        <div>
            <form className='space-y-4'>
                <div>
                    <label className='block'>Email</label>
                    <input type="email" name="email" className='px-4  py-2 border w-full' />
                </div>
                <div>
                    <label className='block'>Password</label>
                    <input type="password" name="email" className='px-4 py-2 border w-full ' />
                </div>
                <div>
                  
                    <button type="submit" name="email" className='px-4 py-2 border w-full cursor-pointer'>SignUp</button>
                </div>
            </form>

        </div>
    );
};

export default Signup;