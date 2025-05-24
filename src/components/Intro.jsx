import React from 'react';
import '../styles/theme.css';

const highlightProjects = [
    {
        name: 'Anachronic',
        description: 'Award-winning time puzzle game with innovative time-control mechanics.',
        link: 'https://yonderu.itch.io/anachronic',
        img: '',
        video: './assets/anachronic.mp4',
        stack: ['Unity', 'C#', 'HLSL', 'Shader Graph'],
        features: [
            'Innovative time manipulation mechanics',
            'Dynamic puzzle design with multiple solutions',
            'Custom shader effects for time distortion',
            'Optimized performance for various platforms'
        ]
    },
    {
        name: 'Wangjung',
        description: 'Job finding mobile app for the elderly, featuring full-stack development and CI/CD.',
        link: '10.1109/ISCIT63075.2024.10793699',
        img: '',
        video: 'https://www.youtube.com/watch?v=oA_d722p3yI',
        stack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
        features: [
            'Accessibility-focused UI/UX design',
            'Real-time job matching algorithm',
            'Location-based job search',
            'Automated CI/CD pipeline'
        ]
    },
    {
        name: 'Biblia',
        description: 'Personalized reading record app with search and AI-powered recommendation chatbot.',
        link: 'https://github.com/ZnoKunG/biblia_fe',
        img: './assets/biblia.png',
        video: '',
        stack: ['React', 'NestJS', 'MongoDB', 'OpenAI API'],
        features: [
            'AI-powered book recommendations based on reading history',
            'Personalized reading statistics and progress tracking',
            'Advanced search with filters and categories',
            'Social features for sharing reading lists'
        ]
    }
];

const experienceSummary = [
    {
        company: 'Polytechnique Montréal',
        role: 'Intern Researcher',
        period: 'Jun 2024 - Sep 2024',
        summary: 'Contributed to quantum software research and academic publishing.',
        logo: '', // Add logo path if available
        icon: '🎓',
    },
    {
        company: 'Jumbo Jumps Co., Ltd.',
        role: 'Intern Full-Stack Developer',
        period: 'May 2023 - Jul 2023',
        summary: 'Developed Unity gameplay prototypes and RESTful APIs in an Agile team.',
        logo: '', // Add logo path if available
        icon: '💼',
    }
];

function Intro() {
    return (
        <div className="flex flex-col items-center justify-center text-center pt-20 pb-6 space-y-4 font-mono terminal-bg terminal-text">
            <img
                src="./assets/profile.jpg"
                alt="Kittaphot Saengprachathanarak profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg mb-4"
            />
            <h1 className='text-4xl md:text-7xl terminal-heading mb-1'>Kittaphot Saengprachathanarak</h1>
            <p className='text-base md:text-xl mb-2 font-medium terminal-text-cyan'>Game Programmer & Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
                <a href="mailto:zno.ksy@gmail.com" className="terminal-text hover:text-cyan-400">zno.ksy@gmail.com</a>
                <span className="terminal-text-muted">|</span>
                <a href="https://github.com/ZnoKunG" target="_blank" rel="noopener noreferrer" className="terminal-text hover:text-cyan-400">GitHub</a>
                <span className="terminal-text-muted">|</span>
                <a href="https://linkedin.com/in/kittaphot-saeng" target="_blank" rel="noopener noreferrer" className="terminal-text hover:text-cyan-400">LinkedIn</a>
                <span className="terminal-text-muted">|</span>
                <a href="https://znokung.github.io/znokung-portfolio/" target="_blank" rel="noopener noreferrer" className="terminal-text hover:text-cyan-400">Portfolio</a>
                <span className="terminal-text-muted">|</span>
                <span className="terminal-text">(+66) 98-275-3733</span>
            </div>
            <p className='text-sm max-w-2xl mb-2 font-bold terminal-text'>
                4th year Information and Communication Engineering student at Chulalongkorn University (1st Honor). Experienced in web, mobile, and game development, with internships in both industry and academia. Notable projects include <span className="terminal-text-cyan font-semibold">Biblia</span> (personalized reading app), <span className="terminal-text-cyan font-semibold">Wangjung</span> (job finding app for elderly), <span className="terminal-text-cyan font-semibold">Find My Mines</span> (multiplayer Unity game), and <span className="terminal-text-cyan font-semibold">Anachronic</span> (award-winning time puzzle game). Passionate about graphics, HPC, compilers, and the full software lifecycle.
            </p>

            {/* Highlight Projects Section */}
            <section className="w-full max-w-7xl mx-auto mt-16 terminal-section">
                <div className="flex items-center gap-2 mb-12">
                    <svg className="w-6 h-6 terminal-text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    <h2 className="text-3xl font-bold terminal-heading">Highlight Projects</h2>
                </div>
                <div className="space-y-6">
                    {highlightProjects.map((proj, index) => (
                        <div key={proj.name}>
                            <div className={`relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                                {/* Project Media */}
                                <div className={`relative aspect-video rounded-lg overflow-hidden ${index % 2 === 0 ? 'md:float-right md:ml-8 md:w-2/3' : 'md:float-left md:mr-8 md:w-2/3'}`}>
                                    {proj.video ? (
                                        proj.video.includes('youtube.com') ? (
                                            <iframe
                                                src={proj.video.replace('watch?v=', 'embed/')}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <video 
                                                src={proj.video} 
                                                className="w-full h-full object-cover" 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline
                                            />
                                        )
                                    ) : proj.img ? (
                                        <img 
                                            src={proj.img} 
                                            alt={proj.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full terminal-bg-secondary flex items-center justify-center terminal-text-muted">
                                            No Media Available
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className={`mt-6 md:mt-0 ${index % 2 === 0 ? 'md:mr-[calc(66.666%+2rem)]' : 'md:ml-[calc(66.666%+2rem)]'}`}>
                                    <div className="space-y-6 text-left">
                                        <div>
                                            <h3 className="text-3xl font-bold terminal-heading mb-3">{proj.name}</h3>
                                            <p className="text-lg terminal-text-secondary">{proj.description}</p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-xl font-semibold terminal-text-cyan">Key Features</h4>
                                            <ul className="space-y-2 list-none pl-0">
                                                {proj.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2 terminal-text-secondary">
                                                        <span className="terminal-text-cyan mt-1">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack and View Project Bar */}
                                <div className="clear-both mt-4 pt-4">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {proj.stack.map((tech, idx) => (
                                                <span key={idx} className="terminal-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={proj.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="terminal-btn px-8 py-2 rounded-lg font-semibold whitespace-nowrap"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {index < highlightProjects.length - 1 && (
                                <div className="w-full h-px bg-[var(--border-primary)] my-6"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Summary Section */}
            <section className="w-full max-w-4xl mx-auto mt-20 terminal-section">
                <div className="flex items-center gap-2 mb-8">
                    <svg className="w-6 h-6 terminal-text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M12 3v4m0 0C7.03 7 3 11.03 3 16h18c0-4.97-4.03-9-9-9z" /></svg>
                    <h2 className="text-2xl font-bold terminal-heading">Experience Summary</h2>
                </div>
                <div className="space-y-4">
                    {experienceSummary.map((exp) => (
                        <div key={exp.company} className="terminal-card flex items-center gap-4 p-4">
                            <div className="text-3xl md:text-4xl">{exp.icon}</div>
                            <div className="flex-1 text-left">
                                <div className="font-bold text-lg terminal-heading">{exp.role}</div>
                                <div className="terminal-text-secondary">@ {exp.company} <span className="terminal-text-muted">({exp.period})</span></div>
                                <div className="terminal-text text-sm mt-1">{exp.summary}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Intro;