import React, {useState} from 'react';
import Intro from './components/Intro';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

function App() {
	const [activeTab, setActiveTab] = useState('intro');

	const tabs = [
		{ id: 'intro', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'education', label: 'Education' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'achievements', label: 'Achievements' },
		{ id: 'contact', label: 'Contact' }
	];
  
	return (
		<div className='bg-black text-green-400 min-h-screen font-mono'>
			{/* Header with navigation */}
			<header className='fixed top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm border-b border-green-800'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='flex items-center justify-between h-16'>
						<nav className='flex space-x-1 overflow-x-auto scrollbar-hide'>
							{tabs.map(tab => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
										activeTab === tab.id
											? 'bg-gray-900 text-green-400 border border-green-500'
											: 'text-green-400 hover:bg-gray-900 hover:border hover:border-green-800'
									}`}
								>
									{tab.label}
								</button>
							))}
						</nav>
						<div className='flex items-center space-x-4 ml-4'>
							<a
								href="./assets/cv.pdf"
								download="cv_kittaphot.pdf"
								className='px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-green-400 border border-green-800 hover:border-green-500 transition-colors'
							>
								Download CV
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* Main content */}
			<main className='pt-20'>
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

export default App
