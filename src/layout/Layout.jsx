import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='bg-gray-200 min-h-screen  flex flex-col items-center justify-center'>
            <main className='p-6 border bg-white rounded-lg  flex flex-col items-center justify-center'>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;