import React, {useState} from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaTools, FaTrophy, FaEnvelope, FaSun, FaMoon, FaFileDownload } from 'react-icons/fa';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Intro from './components/Intro';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

function AppContent() {
	const [activeTab, setActiveTab] = useState('intro');
	const { isDark, toggleTheme } = useTheme();

	const tabs = [
		{ id: 'intro', label: 'About', icon: FaUser },
		{ id: 'experience', label: 'Experience', icon: FaBriefcase },
		{ id: 'education', label: 'Education', icon: FaGraduationCap },
		{ id: 'projects', label: 'Projects', icon: FaCode },
		{ id: 'skills', label: 'Skills', icon: FaTools },
		{ id: 'achievements', label: 'Achievements', icon: FaTrophy },
		{ id: 'contact', label: 'Contact', icon: FaEnvelope }
	];
  
	return (
		<div className={`min-h-screen font-mono ${isDark ? 'bg-black' : 'bg-white'} terminal-text`}>
			{/* Terminal Header */}
			<div className={`fixed top-0 left-0 right-0 z-30 border-b border-green-800 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='relative flex items-center h-8'>
						<div className='absolute left-0 flex items-center space-x-2'>
							<div className='w-3 h-3 rounded-full bg-red-500'></div>
							<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
							<div className='w-3 h-3 rounded-full bg-green-500'></div>
						</div>
						<div className='w-full text-center text-sm terminal-text font-medium'>
							Kittaphot's Terminal
						</div>
					</div>
				</div>
			</div>

			{/* Header with navigation */}
			<header className='fixed top-8 left-0 right-0 z-20 header-bg border-b border-green-800'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='flex items-center justify-between h-16'>
						<nav className='flex space-x-0 overflow-x-auto scrollbar-hide'>
							{tabs.map((tab, index) => (
								<React.Fragment key={tab.id}>
									{index > 0 && (
										<div className="h-6 w-[1px] bg-green-800/30 mx-1 self-center"></div>
									)}
									<button
										onClick={() => setActiveTab(tab.id)}
										className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-2.5 ${
											activeTab === tab.id
												? 'terminal-card border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
												: 'terminal-text hover:terminal-card hover:border-green-800'
										}`}
									>
										<tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'terminal-text' : 'terminal-text-secondary'}`} />
										<span className={activeTab === tab.id ? 'terminal-text' : 'terminal-text-secondary'}>
											{tab.label}
										</span>
									</button>
								</React.Fragment>
							))}
						</nav>
						<div className='flex items-center space-x-4 ml-6 border-l border-green-800/30 pl-6'>
							<button
								onClick={toggleTheme}
								className='terminal-btn px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:border-green-500 transition-all duration-200'
								aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
							>
								{isDark ? (
									<>
										<FaSun className="w-4 h-4 terminal-text" />
										<span className="hidden sm:inline terminal-text">Light Mode</span>
									</>
								) : (
									<>
										<FaMoon className="w-4 h-4 terminal-text" />
										<span className="hidden sm:inline terminal-text">Dark Mode</span>
									</>
								)}
							</button>
							<a
								href="./assets/cv.pdf"
								download="cv_kittaphot.pdf"
								className='terminal-btn px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:border-green-500 transition-all duration-200'
							>
								<FaFileDownload className="w-4 h-4 terminal-text" />
								<span className="terminal-text">Download CV</span>
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* Main content */}
			<main className='pt-28'>
				<div className='max-w-7xl mx-auto px-4 py-8'>
					{activeTab === 'intro' && <Intro />}
					{activeTab === 'experience' && <Experience />}
					{activeTab === 'education' && <Education />}
					{activeTab === 'projects' && <Project />}
					{activeTab === 'skills' && <Skills />}
					{activeTab === 'achievements' && <Achievements />}
					{activeTab === 'contact' && <Contact />}
				</div>
			</main>

			<Footer />
		</div>
	);
}

function App() {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
}

export default App;
