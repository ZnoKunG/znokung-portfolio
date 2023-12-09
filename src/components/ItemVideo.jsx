import React from 'react';

function ItemVideo({ title, imgUrl, videoUrl, stack, link, linkMessage, detail }) {
    return (
        <div>
            <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'>
                <button className="btn" onClick={() => document.getElementById(detail.gameName).showModal()}>
                    {videoUrl != '' ?
                    <video
                    className='w-full h-36 md:h-48 object-cover cursor-pointer' autoPlay loop muted> 
                    <source src={videoUrl} type='video/mp4'/> 
                    Your browser does not support the video tag.
                    </video> :
                    <img src={imgUrl}
                    className='w-full h-36 md:h-48 object-cover cursor-pointer'> 
                    </img> }
                </button>
                <div className='w-full p-4'>
                    <h3 className='text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                        {stack.map(item => (
                            <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <dialog id={detail.gameName} className='modal border-2 border-stone-900 dark:border-white rounded-md overflow-auto bg-white dark:bg-stone-900 px-10 py-5'>
                <div className="modal-action">
                    <form method="dialog">
                    <button>
                        <svg className='btn absolute inset-y-0 right-0 h-5 mt-4 mr-4 dark:stroke-white dark:fill-white' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="cross"><path d="M18.12109,16L31.06055,3.06055c0.58594-0.58545,0.58594-1.53564,0-2.12109c-0.58594-0.58594-1.53516-0.58594-2.12109,0L16,13.87891L3.06055,0.93945c-0.58594-0.58594-1.53516-0.58594-2.12109,0c-0.58594,0.58545-0.58594,1.53564,0,2.12109L13.87891,16L0.93945,28.93945c-0.58594,0.58545-0.58594,1.53564,0,2.12109C1.23242,31.35352,1.61621,31.5,2,31.5s0.76758-0.14648,1.06055-0.43945L16,18.12109l12.93945,12.93945C29.23242,31.35352,29.61621,31.5,30,31.5s0.76758-0.14648,1.06055-0.43945c0.58594-0.58545,0.58594-1.53564,0-2.12109L18.12109,16z"></path></svg>
                    </button>
                    </form>
                </div>
                <div className="flex items-center justify-center flex-col text-center">
                    <h1 className='text-2xl md:text-4xl mb-1 md:mb-1 font-bold dark:text-white'>{detail.gameName}</h1>
                    <p className='text-base md:text-xl mb-5 font-medium dark:text-stone-200'>{detail.projectType}</p>
                    {videoUrl != '' ? <video
                    className='w-full h-80 md:h-96 object-cover cursor-pointer mb-4 border-2 border-stone-900 dark:border-white rounded-md' autoPlay loop muted> 
                    <source src={videoUrl}/> 
                    Your browser does not support the video tag.
                    </video> :
                    <img src={imgUrl}
                    className='w-full h-80 md:h-96 object-cover cursor-pointer mb-4 border-2 border-stone-900 dark:border-white rounded-md'> 
                    </img> }
                    <h1 className='text-base md:text-lg text-gray-600 dark:text-gray-200 mb-3 md:mb-3 font-bold'>{detail.responsibilty}</h1>
                    <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                        {stack.map(item => (
                            <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white text-base dark:text-white rounded-md'>
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
                <h1 className='text-xl md:text-2xl mt-6 mb-3 md:mb-3 md:mt-6 font-bold dark:text-white'>Project Contribution</h1>
                <ul className='list-inside text-gray-600 dark:text-gray-200 list-disc'>
                    {detail.contribution.map(contribute => (
                        <li className='text-base md:text-lg mb-1 font-medium'>
                            {contribute}
                        </li>
                    ))}
                </ul>
                <a href={link} target="_blank" rel="noopener noreferrer" className='inline-block mt-5 mb-3 px-4 py-2 bg-stone-700 dark:bg-white font-semibold text-white dark:text-stone-700 rounded-md'>
                    {linkMessage}
                </a>
            </dialog>
        </div>

    )
}

export default ItemVideo;