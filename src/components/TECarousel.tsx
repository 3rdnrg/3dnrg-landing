// components/TECarousel.js

import { useEffect, useState } from 'react';

const TECarousel = ({ children, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [children.length, interval]);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {children.map((child, index) => (
                    <div key={index} className="flex-none w-full">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TECarouselItem = ({ children }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            {children}
        </div>
    );
};

export { TECarousel, TECarouselItem };
