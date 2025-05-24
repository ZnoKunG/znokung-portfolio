import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Contact() {
    const { isDark } = useTheme();
    
    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold terminal-text'>Contact</h2>
                <p className='terminal-text-secondary max-w-2xl mx-auto'>
                    Let's connect and discuss opportunities
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='terminal-card p-6 flex flex-col items-center justify-center text-center'>
                    <span className={`p-3 rounded-full border border-green-800 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                        <svg className='w-8 h-8 terminal-text-cyan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </span>
                    
                    <h2 className='mt-4 text-lg font-medium terminal-text'>Email</h2>
                    <a href='mailto:zno.ksy@gmail.com' className='mt-2 terminal-text-cyan hover:terminal-text'>zno.ksy@gmail.com</a>
                </div>

                <div className='terminal-card p-6 flex flex-col items-center justify-center text-center'>
                    <span className={`p-3 rounded-full border border-green-800 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                        <svg className='w-8 h-8 terminal-text-cyan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </span>
                    
                    <h2 className='mt-4 text-lg font-medium terminal-text'>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/kittaphot-saeng/' className='mt-2 terminal-text-cyan hover:terminal-text'>Kittaphot's LinkedIn</a>
                </div>

                <div className='terminal-card p-6 flex flex-col items-center justify-center text-center'>
                    <span className={`p-3 rounded-full border border-green-800 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                        <svg className='w-8 h-8 terminal-text-cyan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <path fill="currentColor" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                        </svg>
                    </span>
                    
                    <h2 className='mt-4 text-lg font-medium terminal-text'>Github</h2>
                    <a href='https://github.com/ZnoKunG' className='mt-2 terminal-text-cyan hover:terminal-text'>Kittaphot's Github</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;