import React from 'react';
import portfolio from '../data/portfolio';
import ItemVideo from './ItemVideo';

function Project() {
    return (
        <div className='mt-3'>
            <h3 className='text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold'>Notable Projects</h3>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {portfolio.map(project => (
                        <ItemVideo
                            videoUrl={project.videoUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            linkMessage={project.linkMessage}
                            detail={project.detail}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;