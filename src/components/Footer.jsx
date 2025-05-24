import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center border-t border-green-800'>
            {/* Social Icons */}
            <p className='text-sm mt-2 text-green-600'>
                &copy; {new Date().getFullYear()} Kittaphot Saengprachathanarak. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;