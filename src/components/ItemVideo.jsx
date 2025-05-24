import React from 'react';

function ItemVideo({ title, imgUrl, videoUrl, stack, link, linkMessage, detail }) {
    return (
        <div className='group'>
            <div className='border border-green-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] bg-gray-900 hover:border-green-500'>
                <button 
                    className="w-full" 
                    onClick={() => document.getElementById(detail.gameName).showModal()}
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
                    <h3 className='text-xl font-semibold text-green-400'>{title}</h3>
                    <div className='flex flex-wrap gap-2'>
                        {stack.map((item, index) => (
                            <span 
                                key={index}
                                className='inline-block px-2 py-1 text-sm font-medium bg-gray-800 text-green-400 border border-green-800 rounded-md hover:border-green-500 transition-colors'
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <dialog 
                id={detail.gameName} 
                className='modal backdrop:bg-black/50 backdrop:backdrop-blur-sm'
            >
                <div className='modal-box max-w-4xl bg-gray-900 p-0 overflow-hidden border border-green-800'>
                    <div className='relative'>
                        <form method="dialog" className='absolute top-4 right-4 z-10'>
                            <button className='btn btn-circle btn-ghost'>
                                <svg 
                                    className='w-6 h-6 text-green-400' 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M18.12109,16L31.06055,3.06055c0.58594-0.58545,0.58594-1.53564,0-2.12109c-0.58594-0.58594-1.53516-0.58594-2.12109,0L16,13.87891L3.06055,0.93945c-0.58594-0.58594-1.53516-0.58594-2.12109,0c-0.58594,0.58545-0.58594,1.53564,0,2.12109L13.87891,16L0.93945,28.93945c-0.58594,0.58545-0.58594,1.53564,0,2.12109C1.23242,31.35352,1.61621,31.5,2,31.5s0.76758-0.14648,1.06055-0.43945L16,18.12109l12.93945,12.93945C29.23242,31.35352,29.61621,31.5,30,31.5s0.76758-0.14648,1.06055-0.43945c0.58594-0.58545,0.58594-1.53564,0-2.12109L18.12109,16z"/>
                                </svg>
                            </button>
                        </form>
                        
                        <div className='p-8 space-y-6'>
                            <div className='text-center space-y-2'>
                                <h1 className='text-3xl font-bold text-green-400'>{detail.gameName}</h1>
                                <p className='text-lg text-green-300'>{detail.projectType}</p>
                            </div>

                            <div className='rounded-lg overflow-hidden border border-green-800'>
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
                                <h2 className='text-xl font-semibold text-cyan-400'>{detail.responsibilty}</h2>
                                
                                <div className='flex flex-wrap gap-2'>
                                    {stack.map((item, index) => (
                                        <span 
                                            key={index}
                                            className='inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-green-400 border border-green-800 rounded-md hover:border-green-500 transition-colors'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className='space-y-3'>
                                    <h2 className='text-xl font-semibold text-green-400'>Project Contribution</h2>
                                    <ul className='space-y-2'>
                                        {detail.contribution.map((contribute, index) => (
                                            <li 
                                                key={index}
                                                className='flex items-start space-x-2 text-green-300'
                                            >
                                                <span className='text-cyan-400 mt-1'>•</span>
                                                <span>{contribute}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='inline-block px-6 py-3 bg-gray-800 text-green-400 border border-green-800 font-semibold rounded-lg hover:border-green-500 transition-colors'
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