import React, { useState, ReactNode } from 'react';
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

interface CarouselProps {
    children: ReactNode; 
    startIndex?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ children, startIndex=0 }) => {

    const [currentIndex, setCurrentIndex] = useState(startIndex);

    function lockArrow(id: 'left' | 'right') {
        console.log(id);
        // document.getElementById(`${id}-arrow`)?

    }

    const updateCarousel = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => {
                const numChildren: number = React.Children.count(children);

                const isLastIndex: boolean = prevIndex + 1 >= numChildren;
                
                if(isLastIndex){
                    lockArrow('right');
                }

                return isLastIndex ? prevIndex : prevIndex + 1;
            });
        } else {
            setCurrentIndex((prevIndex) => {
                if(prevIndex < 0){
                    lockArrow('left');
                }
                return prevIndex < 0 ? prevIndex : prevIndex - 1;
            });
        }
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div
                    className="p-12 flex transition-transform duration-500"
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
                id="left-arrow"
                onClick={() => updateCarousel('prev')}
                className="absolute top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
                <img src={LeftArrow} alt="previous slide button" />
            </button>
            <button
                id="right-arrow"
                onClick={() => updateCarousel('next')}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
                <img src={RightArrow} alt="next slide button" />
            </button>
        </div>
    );
};

export default Carousel;
