"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="bg-white text-black px-10 py-5 flex items-center justify-between">
            <div
                className="px-2 py-1 hover:bg-gray-200 transition-colors duration-200 rounded-sm"
                onClick={console.log}>
                <button className="text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className="flex justify-center lg:flex-none lg:ml-16">
                <div>logo</div>
            </div>

            <div
                className="px-2 py-1 hover:bg-gray-200 transition-colors duration-200 rounded-sm"
                onClick={console.log}>
                <button className="text-xl">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </header>
    );
}