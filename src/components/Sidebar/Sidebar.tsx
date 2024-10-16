"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Heading } from '../core';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const sidebarmenu = [
        { title: "React Js", value: "#reactjs" },
        { title: "Description", value: "#" },
        { title: "Question Arrays", value: "#" },
        { title: "Notes", value: "#" }
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);
    
    // Function to close the sidebar
    const closeSidebar = () => setIsOpen(false);

    return (
        <div className='md:w-[20%] flex justify-between md:px-0 px-5 md:py-0 py-[7px]'>
            <Image src="/images/skilline.png" alt="Skilline" width={1383} height={263} className="text-transparent w-[55%] max-w-full md:hidden" />
            <button
                className="lg:hidden focus:outline-none float-right"
                onClick={toggleSidebar}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Sidebar */}
            <aside className={`lg:h-screen lg:w-full bg-white shadow-lg px-[30px] py-5 lg:block
                ${isOpen ? 'block' : 'hidden'} lg:static absolute top-0 left-0 w-3/4 h-full z-50`}>
                <Image src="/images/skilline.png" alt="Skilline" width={1383} height={263} className="w-52 pt-1 h-auto md:block hidden" />
                <Heading className='md:hidden block'>Menu</Heading>
                <div className="flex justify-between items-center mb-4">

                    <button
                        className="lg:hidden focus:outline-none absolute border p-0 border-dotted border-black right-3 top-2.5"
                        onClick={toggleSidebar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="space-y-2">
                    {sidebarmenu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.value} onClick={closeSidebar}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
