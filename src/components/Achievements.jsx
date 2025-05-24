import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Achievements() {
    const { isDark } = useTheme();
    const achievements = [
        {
            title: "Game Talent Showcase 2023 (TGA)",
            description: "Awarded for innovative game design and technical excellence in game development.",
            details: [
                "Best Game Design Award for 'Anachronic'",
                "Technical Achievement Award for time manipulation mechanics",
                "Selected for showcase at Thailand Game Show 2023"
            ]
        },
        {
            title: "First Honor in ICE at Chulalongkorn University",
            description: "Consistently maintained academic excellence throughout the program.",
            details: [
                "Cumulative GPA of 3.67",
                "Selected for international exchange program"
            ]
        },
        {
            title: "IEEE ISCIT 2024 Publication",
            description: "Research contribution in quantum software development.",
            details: [
                "Co-authored paper on bug characteristics in quantum software",
                "Published in IEEE Xplore Digital Library",
                "Presented at International Symposium on Communications and Information Technology"
            ]
        }
    ];

    return (
        <div className='space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold terminal-text'>Achievements</h2>
                <p className='terminal-text-secondary max-w-2xl mx-auto'>
                    Recognition and accomplishments in academics and development
                </p>
            </div>

            <div className='space-y-6'>
                {achievements.map((achievement, index) => (
                    <div key={index} className='terminal-card p-6'>
                        <h3 className='text-xl font-semibold terminal-text mb-2'>{achievement.title}</h3>
                        <p className='terminal-text-secondary mb-4'>{achievement.description}</p>
                        <ul className='space-y-2'>
                            {achievement.details.map((detail, detailIndex) => (
                                <li 
                                    key={detailIndex} 
                                    className='flex items-start space-x-2'
                                >
                                    <span className='terminal-text-cyan mt-1'>•</span>
                                    <span className='terminal-text-secondary'>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements; 