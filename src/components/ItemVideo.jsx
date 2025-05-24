import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function ItemVideo({ title, imgUrl, videoUrl, stack, link, linkMessage, detail }) {
    const { isDark } = useTheme();
    
    useEffect(() => {
        const dialog = document.getElementById(detail.gameName);
        
        const handleDialogOpen = () => {
            document.body.style.overflow = 'hidden';
        };
        
        const handleDialogClose = () => {
            document.body.style.overflow = 'auto';
        };
        
        dialog.addEventListener('close', handleDialogClose);
        dialog.addEventListener('cancel', handleDialogClose);
        
        return () => {
            dialog.removeEventListener('close', handleDialogClose);
            dialog.removeEventListener('cancel', handleDialogClose);
        };
    }, [detail.gameName]);

    const handleOpenModal = () => {
        const dialog = document.getElementById(detail.gameName);
        dialog.showModal();
        document.body.style.overflow = 'hidden';
    };
    
    return (
        <div className='group'>
            <div className='terminal-card transition-transform duration-300 hover:scale-[1.02]'>
                <button 
                    className="w-full" 
                    onClick={handleOpenModal}
                >
                    {videoUrl ? (
                        <video
                            className='w-full h-48 object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-90' 
                            autoPlay 
                            loop 
                            muted
                        > 
                            <source src={videoUrl} type='video/mp4'/> 
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img 
                            src={imgUrl}
                            alt={title}
                            className='w-full h-48 object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-90'
                        /> 
                    )}
                </button>
                <div className='p-4 space-y-3'>
                    <h3 className='text-xl font-semibold terminal-text'>{title}</h3>
                    <div className='flex flex-wrap gap-2'>
                        {stack.map((item, index) => (
                            <span 
                                key={index}
                                className='terminal-tag'
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <dialog 
                id={detail.gameName} 
                className='modal backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent border-none p-0 outline-none rounded-xl fixed'
                onClick={(e) => {
                    const dialogDimensions = e.currentTarget.getBoundingClientRect()
                    if (
                        e.clientX < dialogDimensions.left ||
                        e.clientX > dialogDimensions.right ||
                        e.clientY < dialogDimensions.top ||
                        e.clientY > dialogDimensions.bottom
                    ) {
                        e.currentTarget.close()
                    }
                }}
            >
                <div className='modal-box max-w-4xl terminal-card p-0 overflow-y-auto max-h-[90vh] rounded-xl'>
                    <div className='relative'>
                        <div className='p-8 space-y-6'>
                            <div className='text-center space-y-2'>
                                <h1 className='text-3xl font-bold terminal-text'>{detail.gameName}</h1>
                                <p className='text-lg terminal-text-secondary'>{detail.projectType}</p>
                            </div>

                            <div className='terminal-card overflow-hidden'>
                                {videoUrl ? (
                                    <video
                                        className='w-full h-[400px] object-cover' 
                                        autoPlay 
                                        loop 
                                        muted
                                    > 
                                        <source src={videoUrl}/> 
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img 
                                        src={imgUrl}
                                        alt={detail.gameName}
                                        className='w-full h-[400px] object-cover'
                                    /> 
                                )}
                            </div>

                            <div className='space-y-4'>
                                <h2 className='text-xl font-semibold terminal-text-cyan'>{detail.responsibilty}</h2>
                                
                                <div className='flex flex-wrap gap-2'>
                                    {stack.map((item, index) => (
                                        <span 
                                            key={index}
                                            className='terminal-tag'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className='space-y-3'>
                                    <h2 className='text-xl font-semibold terminal-text'>Project Contribution</h2>
                                    <ul className='space-y-2'>
                                        {detail.contribution.map((contribute, index) => (
                                            <li 
                                                key={index}
                                                className='flex items-start space-x-2 terminal-text-secondary'
                                            >
                                                <span className='terminal-text-cyan mt-1'>•</span>
                                                <span>{contribute}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='terminal-btn inline-block px-6 py-3 rounded-lg'
                                >
                                    {linkMessage}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ItemVideo;