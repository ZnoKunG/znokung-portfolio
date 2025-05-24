import React from 'react';

function Education() {
    const education = [
        {
            school: "Chulalongkorn University",
            location: "Bangkok, Thailand",
            degree: "Bachelor's degree in Information and Communication Engineering",
            gpa: "3.67 GPA",
            period: "August 2021 - Graduating in 2025"
        },
        {
            school: "Tsinghua University",
            location: "Beijing, China",
            degree: "Exchange Student Program in Industrial Engineering",
            gpa: "3.58 GPA",
            period: "September 2024 - January 2025"
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold text-green-400'>Education</h2>
                <p className='text-green-300 max-w-2xl mx-auto'>
                    My academic journey across prestigious institutions
                </p>
            </div>

            <div className='grid gap-6'>
                {education.map((edu, index) => (
                    <div 
                        key={index}
                        className='bg-gray-900 rounded-lg p-6 border border-green-800 hover:border-green-500 transition-colors'
                    >
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                            <div>
                                <h3 className='text-xl font-semibold text-green-400'>{edu.school}</h3>
                                <p className='text-green-300'>{edu.location}</p>
                            </div>
                            <span className='text-sm text-green-600 mt-2 md:mt-0'>
                                {edu.period}
                            </span>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-green-300'>{edu.degree}</p>
                            <p className='text-cyan-400 font-medium'>{edu.gpa}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education; 