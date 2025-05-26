import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center'>
            {/* Social Icons */}
            <p className='text-sm mt-2 text-[var(--terminal-text-cyan)]'>
                &copy; {new Date().getFullYear()} Kittaphot Saengprachathanarak. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;