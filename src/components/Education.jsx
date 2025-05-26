import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Education() {
    const { isDark } = useTheme();
    const education = [
        {
            school: "Chulalongkorn University",
            location: "Bangkok, Thailand",
            degree: "Bachelor's degree in Information and Communication Engineering",
            gpa: "3.67 GPA",
            period: "August 2021 - Graduating in 2025",
            imgUrl: "./assets/chula.jpg"
        },
        {
            school: "Tsinghua University",
            location: "Beijing, China",
            degree: "Exchange Student Program in Industrial Engineering",
            gpa: "3.58 GPA",
            period: "September 2024 - January 2025",
            imgUrl: "./assets/tsinghua.png"
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold terminal-text'>Education</h2>
                <p className='terminal-text-secondary max-w-2xl mx-auto'>
                    My academic journey across prestigious institutions
                </p>
            </div>

            <div className='grid gap-6'>
                {education.map((edu, index) => (
                    <div 
                        key={index}
                        className='terminal-card p-6'
                    >
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='md:w-1/4 flex items-center justify-center'>
                                <img 
                                    src={edu.imgUrl} 
                                    alt={edu.school}
                                    className='w-50 h-50 object-contain'
                                />
                            </div>
                            <div className='md:w-3/4'>
                                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                                    <div>
                                        <h3 className='text-xl font-semibold terminal-text'>{edu.school}</h3>
                                        <p className='terminal-text-secondary'>{edu.location}</p>
                                    </div>
                                    <span className='text-sm terminal-text-muted mt-2 md:mt-0'>
                                        {edu.period}
                                    </span>
                                </div>
                                <div className='space-y-2'>
                                    <p className='terminal-text-secondary'>{edu.degree}</p>
                                    <p className='terminal-text-cyan font-medium'>{edu.gpa}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education; 