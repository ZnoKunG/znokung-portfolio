import React from 'react';
import portfolio from '../data/portfolio';
import ItemVideo from './ItemVideo';
import { FaCode, FaGamepad, FaPaintBrush, FaMicrochip } from 'react-icons/fa';

function Project() {
    // Group projects by category
    const grouped = portfolio.reduce((acc, project) => {
        if (!acc[project.category]) acc[project.category] = [];
        acc[project.category].push(project);
        return acc;
    }, {});

    // Define display order and icons for categories
    const categoryConfig = {
        'Software Development': { icon: FaCode },
        'Game Development': { icon: FaGamepad },
        'Graphics Demonstration': { icon: FaPaintBrush },
        'Low-Level Programming': { icon: FaMicrochip }
    };

    // Define display order for categories
    const categoryOrder = [
        'Software Development',
        'Game Development',
        'Graphics Demonstration',
        'Low-Level Programming'
    ];

    return (
        <div className='space-y-12'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold text-[var(--text-primary)]'>My Projects</h2>
                <p className='text-[var(--text-secondary)] max-w-2xl mx-auto'>
                    Here are some of my notable projects, grouped by category. Click on any project to learn more about my contributions and technologies used.
                </p>
            </div>
            {categoryOrder.map(category => (
                grouped[category] && (
                    <div key={category} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-[var(--text-primary)] border-b border-[var(--border-primary)] pb-2 mb-2 flex items-center gap-2">
                            {React.createElement(categoryConfig[category].icon, { className: "w-6 h-6" })}
                            {category}
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {grouped[category].map((project, index) => (
                                <ItemVideo
                                    key={project.title + index}
                                    title={project.title}
                                    imgUrl={project.imgUrl}
                                    videoUrl={project.videoUrl}
                                    stack={project.stack}
                                    link={project.link}
                                    linkMessage={project.linkMessage}
                                    detail={project.detail}
                                />
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default Project;