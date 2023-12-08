import React from 'react';

function Contact() {
    return (
    <div class="container px-6 py-12 mx-auto">
        <div class="text-center">

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Contact me</h1>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 rounded-full bg-gray-100/80 dark:bg-stone-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-stone-900 dark:text-white">Email</h2>
                <p class="mt-2 text-blue-500 dark:text-blue-400">zno.ksy@gmail.com</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 rounded-full bg-gray-100/80 dark:bg-stone-700">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                        <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                        <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-stone-900 dark:text-white">LinkedIn</h2>
                <a href='https://www.linkedin.com/in/kittaphot-saeng/' class="mt-2 text-blue-500 dark:text-blue-400">Kittaphot's LinkedIn</a>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 rounded-full bg-gray-100/80 dark:bg-stone-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-stone-900 dark:text-white">Phone</h2>
                <p class="mt-2 text-blue-500 dark:text-blue-400">+66 98-275-3733</p>
            </div>
        </div>
    </div>
    )
}

export default Contact;