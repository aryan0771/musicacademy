'use client';

import React, { FormEvent, useState } from 'react';
import { Meteors } from '@/components/ui/meteors';

function MusicSchoolContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 pt-45">
            <Meteors number={20} />

            <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

                <div className="relative flex flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                    <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <div className="max-w-2xl mx-auto p-4 relative z-10 w-full text-center">
                        <h1 className="text-lg md:text-7xl font-sans font-bold mb-8 text-white">
                            Contact Us
                        </h1>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm">
                            We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                                required
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                                rows={5}
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default MusicSchoolContactUs;

// <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
//   {' '}
//   {/* Ensure the container is relative */}
//   {/* BackgroundBeams with adjusted z-index */}
//   <Meteors className="absolute top-0 left-0 w-full h-full z-0" />
//   {/* Content with higher z-index */}
//   <div className="max-w-2xl mx-auto p-4 relative z-10">
//     {' '}
//     {/* Add relative and z-10 to bring content to the front */}
//     <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
//       Contact Us
//     </h1>
//     <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
//       We&apos;re here to help with any questions about our courses,
//       programs, or events. Reach out and let us know how we can assist you
//       in your musical journey.
//     </p>
//     <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Your email address"
//         className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//         required
//       />
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Your message"
//         className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//         rows={5}
//         required
//       ></textarea>
//       <button
//         type="submit"
//         className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//       >
//         Send Message
//       </button>
//     </form>
//   </div>
// </div>