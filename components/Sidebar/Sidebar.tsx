"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Heading } from '../core';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility on mobile

    const sidebarmenu = [
        { title: "Video", value: "#home" },
        { title: "Description", value: "#description" },
        { title: "Question Arrays", value: "#queries" },
        { title: "Notes", value: "#notes" }
    ];

    const toggleSidebar = () => setIsOpen(!isOpen); // Toggle function for sidebar

    return (
        <div>
            {/* Toggle button for mobile */}
            <button
                className="lg:hidden p-4 focus:outline-none float-right"
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
                <div className="flex justify-between items-center mb-4">
                    <Heading>Menu</Heading>
                    {/* Close button for mobile */}
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
                            <Link href={item.value}>
                            {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};
