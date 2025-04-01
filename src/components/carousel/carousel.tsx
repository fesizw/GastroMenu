"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import restaurant1 from '@/assets/imageRestaurant1.jpg';
import restaurant2 from '@/assets/imageRestaurant2.jpg';
import restaurant3 from '@/assets/imageRestaurant3.png';
import restaurant4 from '@/assets/imageRestaurant4.jpg';


export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const images: StaticImageData[] = [
        restaurant1,
        restaurant2,
        restaurant3,
        restaurant4
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={100}
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-0 top-0 h-full w-20 flex items-center justify-center cursor-pointer"
                onClick={prevSlide}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-gray-100 text-3xl" />
            </div>
            <div className="absolute right-0 top-0 h-full w-20 flex items-center justify-center cursor-pointer"
                onClick={nextSlide}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-100 text-3xl" />
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}