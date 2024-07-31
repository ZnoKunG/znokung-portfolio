import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md: mb-3 font-bold'>Kittaphot</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Game Programmer & Full Stack Developer</p>
            <p className='text0sm max-w-xl mb-2 font-bold'>Hi, I'm Kittaphot Seangprachathanarak proficient on web and mobile app development using React and NestJS integrated with docker deployed on VM with CI/CD Github Actions. I also have extensive experience on game development especially Unity using C#. I have an interest on low level programming including graphics using OpenGL and parallel programming using CUDA. </p>
        </div>
    )
}

export default Intro;