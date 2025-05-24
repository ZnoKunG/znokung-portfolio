import React from 'react';

function Achievements() {
    const achievements = [
        {
            title: "1st Class Honors & Academic Excellence",
            event: "Chulalongkorn University",
            description: "Graduated with 1st Class Honors (GPA 3.67) in Information and Communication Engineering, recognized for outstanding academic performance and active participation in research and projects."
        },
        {
            title: "Talent of the Year 2023",
            event: "Game Talent Showcase 2023",
            organization: "Thai Game Software Industry Association (TGA)",
            description: "Recognized for outstanding game development skills and innovation in the Anachronic time puzzle game project."
        },
        {
            title: "Best of Technology Award",
            event: "Game Talent Showcase 2023",
            organization: "Thai Game Software Industry Association (TGA)",
            description: "Awarded for technical excellence in game development and implementation of innovative features."
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold text-green-400'>Achievements & Recognition</h2>
                <p className='text-green-300 max-w-2xl mx-auto'>
                    Notable accomplishments and awards throughout my academic and professional journey
                </p>
            </div>

            <div className='grid gap-6'>
                {achievements.map((achievement, index) => (
                    <div 
                        key={index}
                        className='bg-gray-900 rounded-lg p-6 border border-green-800 hover:border-green-500 transition-colors'
                    >
                        <div className='space-y-3'>
                            <h3 className='text-xl font-semibold text-cyan-400'>
                                {achievement.title}
                            </h3>
                            {achievement.event && (
                                <p className='text-green-400 font-medium'>
                                    {achievement.event}
                                </p>
                            )}
                            {achievement.organization && (
                                <p className='text-green-300'>
                                    {achievement.organization}
                                </p>
                            )}
                            <p className='text-green-300'>
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements; 