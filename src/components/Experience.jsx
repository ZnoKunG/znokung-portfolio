import React from 'react';

function Experience() {
    const experiences = [
        {
            role: "Intern Researcher",
            company: "Polytechnique Montréal",
            period: "June 2024 - September 2024",
            location: "Quebec, Canada",
            description: "Research contribution in quantum software development and academic publishing.",
            achievements: [
                "Contributed in reviewing the 'Bug Characteristics in Quantum Software Ecosystem' published paper.",
                "Familiar with fundamentals to quantum programming and academic publishing process",
                "The paper is available at IEEE Xplore Digital Library"
            ],
            imgUrl: "./assets/montreal.png",
            techStack: ["Python", "LaTeX", "Git", "Research Methods"]
        },
        {
            role: "Intern Full-Stack Developer",
            company: "Jumbo Jumps Co., Ltd.",
            period: "May 2023 - July 2023",
            location: "Bangkok, Thailand",
            description: "Full-stack development focusing on game development and web services.",
            achievements: [
                "Collaborated in an Agile environment using Jira and Git for task tracking and feature integration",
                "Developed gameplay prototypes in Unity, C# and utilized OOP for scalable and flexible designs",
                "Built RESTful APIs using .NET Core with Swagger, supporting front-end requests with Angular-based admin tools"
            ],
            imgUrl: "./assets/jumbojumps.png",
            techStack: ["Unity", "C#", ".NET Core", "Angular", "Swagger", "Jira", "Git"]
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold terminal-text'>Professional Experience</h2>
                <p className='terminal-text-secondary max-w-2xl mx-auto'>
                    My professional journey in software development and research
                </p>
            </div>

            <div className='space-y-6'>
                {experiences.map((exp, index) => (
                    <div key={index} className='terminal-card p-6'>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='md:w-1/4 flex flex-col justify-between h-full'>
                                <div className='flex items-center justify-center'>
                                    <img 
                                        src={exp.imgUrl} 
                                        alt={exp.company}
                                        className='w-32 h-32 object-contain'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <div className='flex flex-wrap gap-2 justify-center'>
                                        {exp.techStack.map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className='terminal-tag text-sm'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-3/4 space-y-4'>
                                <div className='flex flex-col md:flex-row md:items-start md:justify-between'>
                                    <div>
                                        <h3 className='text-xl font-bold terminal-text'>{exp.role}</h3>
                                        <p className='terminal-text-secondary'>{exp.company}</p>
                                        <p className='terminal-text-muted text-sm'>{exp.location}</p>
                                    </div>
                                    <span className='text-sm terminal-text-muted mt-2 md:mt-0 whitespace-nowrap'>
                                        {exp.period}
                                    </span>
                                </div>
                                <p className='terminal-text-secondary'>{exp.description}</p>
                                <ul className='space-y-2'>
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx} className='flex items-start space-x-2'>
                                            <span className='terminal-text-cyan mt-1'>•</span>
                                            <span className='terminal-text-secondary'>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;