import React from 'react';

function Skills() {
    const skillCategories = [
        {
            title: "Computer Languages",
            skills: ["Typescript", "Javascript", "HTML", "CSS", "C#", "C", "C++", "Python", "Java", "SQL"]
        },
        {
            title: "Libraries & Frameworks",
            skills: ["React", "React Native", "Angular", "NestJS", ".NET Core", "CUDA", "HLSL", "GLSL", "SFML", "Unity"]
        },
        {
            title: "DevOps & Cloud",
            skills: ["AWS", "DigitalOcean", "MongoDB", "Azure", "Firebase", "Github Actions"]
        },
        {
            title: "Communication Languages",
            skills: ["Thai (Native)", "English (IELTS 7.5)"]
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold text-green-400'>Skills & Proficiencies</h2>
                <p className='text-green-300 max-w-2xl mx-auto'>
                    Technical expertise and language proficiencies
                </p>
            </div>

            <div className='grid gap-8'>
                {skillCategories.map((category, index) => (
                    <div 
                        key={index}
                        className='bg-gray-900 rounded-lg p-6 border border-green-800'
                    >
                        <h3 className='text-xl font-semibold text-green-400 mb-4'>{category.title}</h3>
                        <div className='flex flex-wrap gap-3'>
                            {category.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className='px-4 py-2 bg-gray-800 text-green-400 border border-green-800 rounded-full text-sm font-medium hover:border-green-500 transition-colors'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills; 