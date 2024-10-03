import React, { useState, ReactNode } from 'react';

interface CarouselProps {
    children: ReactNode; 
    startIndex?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ children, startIndex=0 }) => {

    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const updateCarousel = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
        }
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className="min-w-full">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => updateCarousel('prev')}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded"
            >
                &#10094; {/* Left Arrow */}
            </button>
            <button
                onClick={() => updateCarousel('next')}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded"
            >
                &#10095; {/* Right Arrow */}
            </button>
        </div>
    );
};

export default Carousel;
