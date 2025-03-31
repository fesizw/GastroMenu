import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="w-full bg-white text-black px-10 py-5 flex items-center justify-between fixed top-0 left-0">
            {/* Mobile Menu Button */}
            <button className="text-xl">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:flex-none lg:ml-16">
                <div>logo</div>
            </div>

            {/* Search Icon */}
            <button className="text-xl">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </header>
    );
}