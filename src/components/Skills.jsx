import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaCode, FaTools, FaServer, FaGamepad } from 'react-icons/fa';

function Skills() {
    const { isDark } = useTheme();
    const skills = [
        {
            category: "Programming Languages",
            icon: FaCode,
            items: ["C#", "C", "C++", "JavaScript", "TypeScript", "Golang", "Python", "SQL", "HTML/CSS"]
        },
        {
            category: "Frameworks & Libraries",
            icon: FaServer,
            items: ["React", "React Native", "Angular", "NodeJS", "ExpressJS", "Expo", "Gin", "TailwindCSS"]
        },
        {
            category: "Tools & Technologies",
            icon: FaTools,
            items: ["Git", "Docker", "Linux Commands", "AWS", "DigitalOcean", "MongoDB", "MySQL", "PostgreSQL", "Jira", "Bitbucket", "Github Actions", "Swagger"]
        },
        {
            category: "Game Development & Graphics",
            icon: FaGamepad,
            items: ["Unity", "Unreal Engine", "OpenGL", "CUDA", "GLSL", "HLSL", "Shader Graph"]
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold terminal-text'>Technical Skills</h2>
                <p className='terminal-text-secondary max-w-2xl mx-auto'>
                    My technical toolkit and areas of expertise
                </p>
            </div>

            <div className='grid gap-6'>
                {skills.map((skillGroup, index) => (
                    <div key={index} className='terminal-card p-6'>
                        <h3 className='text-xl font-semibold terminal-text mb-4 flex items-center gap-2'>
                            <skillGroup.icon className="w-5 h-5 terminal-text-cyan" />
                            {skillGroup.category}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {skillGroup.items.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className='terminal-tag'
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