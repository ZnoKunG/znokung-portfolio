import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function ItemImg({ title, imgUrl, stack, link, detail }) {
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
        <div>
            <div className='terminal-card'>
                <button className="w-full" onClick={handleOpenModal}>
                    <img 
                        src={imgUrl}
                        alt={title}
                        className='w-full h-36 md:h-48 object-cover cursor-pointer'
                    /> 
                </button>
                <div className='w-full p-4'>
                    <h3 className='text-lg terminal-text md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                        {stack.map((item, index) => (
                            <span 
                                key={index}
                                className='terminal-tag'
                            >
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <dialog 
                id={detail.gameName} 
                className='modal bg-transparent border-none outline-none rounded-xl overflow-hidden p-0 fixed backdrop:bg-black/50 backdrop:backdrop-blur-sm'
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
                <div className='terminal-card p-10 rounded-xl max-h-[90vh] overflow-y-auto'>
                    <div className="flex items-center justify-center flex-col text-center">
                        <h1 className='text-2xl md:text-4xl mb-1 md:mb-1 font-bold terminal-text'>{detail.gameName}</h1>
                        <p className='text-base md:text-xl mb-5 font-medium terminal-text-secondary'>{detail.workplace}</p>
                        <div className='terminal-card overflow-hidden mb-4'>
                            <img 
                                src={imgUrl}
                                alt={detail.gameName}
                                className='w-full h-80 md:h-96 object-cover cursor-pointer'
                            /> 
                        </div>
                        <h1 className='text-base md:text-lg terminal-text-cyan mb-3 mt-3 md:mb-3 font-bold'>{detail.responsibilty}</h1>
                        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                            {stack.map((item, index) => (
                                <span 
                                    key={index}
                                    className='terminal-tag'
                                >
                                    {item}
                                </span>
                            ))}
                        </p>
                    </div>
                    <h1 className='text-xl md:text-2xl mt-6 mb-3 md:mb-3 md:mt-6 font-bold terminal-text'>Project Contribution</h1>
                    <ul className='list-inside terminal-text-secondary list-disc'>
                        {detail.contribution.map((contribute, index) => (
                            <li 
                                key={index}
                                className='text-base md:text-lg mb-1 font-medium'
                            >
                                {contribute}
                            </li>
                        ))}
                    </ul>
                </div>
            </dialog>
        </div>
    )
}

export default ItemImg;