"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Drawer from './components/drawer';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-black px-10 py-5 flex items-center justify-between">
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <div
                className="px-2 py-1 hover:bg-gray-200 duration-200 rounded-sm cursor-pointer"
                onClick={() => setIsOpen(true)}>
                <button className="text-xl cursor-pointer">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className="flex justify-center lg:flex-none lg:ml-16">
                <div>logo</div>
            </div>

            <div
                className="px-2 py-1 hover:bg-gray-200 duration-200 rounded-sm cursor-pointer"
                onClick={console.log}>
                <button className="text-xl cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </header>
    );
}