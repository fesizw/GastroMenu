"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
    return (
        <>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-10"
                        onClick={onClose}
                    />

                    <div className="fixed top-0 right-0 h-full w-[450px] bg-white shadow-lg duration-300 z-10">
                        <div className="flex justify-end items-center p-6 border-b">
                            <button onClick={onClose} className="text-gray-500 hover:text-red-700 cursor-pointer">
                                <FontAwesomeIcon icon={faXmark} className="text-xl" />
                            </button>
                        </div>

                        <div className="flex justify-center py-8">
                            Logo
                        </div>

                        <div className="px-6 space-y-6">
                            <div className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faLocationDot} className="text-gray-500 mt-1" />
                                <p className="text-gray-700">
                                    Av. Niemeyer, 769, São Conrado, Rio de Janeiro, RJ, Brasil
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                                <span className="text-gray-700">contato@email.com</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faGlobe} className="text-gray-500" />
                                <span className="text-gray-700">@Restaurant</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}