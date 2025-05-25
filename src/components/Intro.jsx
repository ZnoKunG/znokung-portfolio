import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaTools, FaTrophy, FaEnvelope, FaLaptopCode, FaSuitcase, FaClock, FaUserFriends, FaBook } from 'react-icons/fa';
import '../styles/theme.css';

const highlightProjects = [
    {
        name: 'Wangjung',
        description: 'Mobile application designed for elderly job seekers with full-stack development and cloud deployment.',
        link: '10.1109/ISCIT63075.2024.10793699',
        img: './assets/wangjung.png',
        video: '',
        stack: ['React Native', 'NestJS', 'TypeORM', 'Docker'],
        features: [
            'Designed <span className="terminal-text-cyan">application architecture</span> from requirements',
            'Developed front-end mobile app with <span className="terminal-text-cyan">React Native</span>',
            'Built back-end services with <span className="terminal-text-cyan">NestJS</span> and <span className="terminal-text-cyan">TypeORM</span>',
            'Implemented <span className="terminal-text-cyan">CI/CD</span> with Github Actions'
        ],
        icon: FaUserFriends
    },
    {
        name: 'Anachronic',
        description: 'Award-winning puzzle platformer featuring innovative <span className="terminal-text-cyan">time manipulation</span> mechanics.',
        link: 'https://yonderu.itch.io/anachronic',
        img: '',
        video: './assets/anachronic.mp4',
        stack: ['Unity', 'C#', 'Tilemap Editor'],
        features: [
            'Implemented <span className="terminal-text-cyan">Character Movement Controller</span>',
            'Developed <span className="terminal-text-cyan">Time-Control Power System</span>',
            'Created <span className="terminal-text-cyan">Player Clone</span> recording system',
            'Designed and iterated levels based on feedback'
        ],
        icon: FaClock
    },
    {
        name: 'Biblia',
        description: 'Reading record app with <span className="terminal-text-cyan">AI-powered chatbot</span> for personalized book recommendations.',
        link: 'https://github.com/ZnoKunG/biblia_fe',
        img: './assets/biblia.png',
        video: '',
        stack: ['React Native', 'Gin', 'Langchain'],
        features: [
            'Developed mobile app with <span className="terminal-text-cyan">React Native</span> and Expo',
            'Integrated back-end service using <span className="terminal-text-cyan">Golang</span> and <span className="terminal-text-cyan">Gin</span>',
            'Designed recommendation chatbot with <span className="terminal-text-cyan">Langchain</span>',
            'Implemented <span className="terminal-text-cyan">personalized user data</span> integration'
        ],
        icon: FaBook
    }
];

const experienceSummary = [
    {
        company: 'Polytechnique Montréal',
        role: 'Intern Researcher',
        period: 'Jun 2024 - Sep 2024',
        summary: 'Contributed to quantum software research and academic publishing.',
        logo: './assets/montreal.png',
    },
    {
        company: 'Jumbo Jumps Co., Ltd.',
        role: 'Intern Full-Stack Developer',
        period: 'May 2023 - Jul 2023',
        summary: 'Developed Unity gameplay prototypes and RESTful APIs in an Agile team.',
        logo: './assets/jumbojumps.png',
    }
];

function Intro() {
    return (
        <div className="flex flex-col items-center justify-center text-center pt-12 pb-6 space-y-4 font-mono terminal-bg terminal-text">
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
                <span className="terminal-text-cyan font-semibold">Information and Communication Engineering</span> graduate from <span className="terminal-text-cyan font-semibold">Chulalongkorn University</span> (1st Honor). Experienced in <span className="terminal-text-cyan font-semibold">web</span>, <span className="terminal-text-cyan font-semibold">mobile</span>, and <span className="terminal-text-cyan font-semibold">game development</span>, with internships in both industry and academia. Proficient in multiple programming languages including <span className="terminal-text-cyan font-semibold">TypeScript</span>, <span className="terminal-text-cyan font-semibold">C#</span>, <span className="terminal-text-cyan font-semibold">Golang</span>, and <span className="terminal-text-cyan font-semibold">C/C++</span>. Passionate about <span className="terminal-text-cyan font-semibold">graphics programming</span>, <span className="terminal-text-cyan font-semibold">high-performance computing</span>, <span className="terminal-text-cyan font-semibold">compilers</span>, and the full software lifecycle.
            </p>

            {/* Separator */}
            <div className="w-full max-w-7xl mx-auto mt-16 mb-8">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px bg-green-800 flex-1"></div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                    </div>
                    <div className="h-px bg-green-800 flex-1"></div>
                </div>
            </div>

            {/* Highlight Projects Section */}
            <section className="w-full max-w-7xl mx-auto mt-16 terminal-section">
                <div className="flex items-center gap-2 mb-12">
                    <FaLaptopCode className="w-6 h-6 terminal-text" />
                    <h2 className="text-3xl font-bold terminal-heading">Highlight Projects</h2>
                </div>
                <div className="space-y-6">
                    {highlightProjects.map((proj, index) => (
                        <div key={proj.name}>
                            <div className={`relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                                {/* Project Media */}
                                <div className={`relative aspect-video rounded-lg overflow-hidden border border-green-800 ${index % 2 === 0 ? 'md:float-right md:ml-8 md:w-2/3' : 'md:float-left md:mr-8 md:w-2/3'}`}>
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
                                            <h3 className="text-3xl font-bold terminal-heading mb-3 flex items-center gap-3">
                                                {proj.name}
                                                <proj.icon className="terminal-text" />
                                            </h3>
                                            <p className="text-lg terminal-text-secondary" dangerouslySetInnerHTML={{ __html: proj.description }}></p>
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-xl font-semibold terminal-text-cyan">Key Features</h4>
                                            <ul className="space-y-2 list-none pl-0">
                                                {proj.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2 terminal-text-secondary">
                                                        <span className="terminal-text-cyan mt-1">•</span>
                                                        <span dangerouslySetInnerHTML={{ __html: feature }}></span>
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

            {/* Separator */}
            <div className="w-full max-w-7xl mx-auto mt-16 mb-8">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px bg-green-800 flex-1"></div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                    </div>
                    <div className="h-px bg-green-800 flex-1"></div>
                </div>
            </div>

            {/* Experience Summary Section */}
            <section className="w-full max-w-7xl mx-auto mt-16 terminal-section">
                <div className="flex items-center gap-2 mb-12">
                    <FaSuitcase className="w-6 h-6 terminal-text" />
                    <h2 className="text-3xl font-bold terminal-heading">Experience Summary</h2>
                </div>
                <div className="space-y-4">
                    {experienceSummary.map((exp) => (
                        <div key={exp.company} className="terminal-card flex items-center gap-8 p-8">
                            <div className="w-24 h-24 flex-shrink-0">
                                <img 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
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