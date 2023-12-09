import React from 'react';
import experience from '../data/experience';
import ItemImg from './ItemImg';

function Experience() {
    return (
        <div className='mt-10'>
            <h3 className='text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold'>Work Experiences</h3>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {experience.map(project => (
                        <ItemImg
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            detail={project.detail}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;