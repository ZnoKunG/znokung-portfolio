import React from 'react';
import portfolio from '../data/portfolio';
import Item from './Item';

function Project() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {portfolio.map(project => (
                    <Item
                        videoUrl={project.videoUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        detail={project.detail}
                    />
                ))}
            </div>
        </div>
    )
}

export default Project;