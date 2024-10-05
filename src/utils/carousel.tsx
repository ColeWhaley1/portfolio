import React, { useState, ReactNode, useEffect } from 'react';
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

interface CarouselProps {
    children: ReactNode;
    startIndex?: number;
}

let carouselIdCounter: number = 0;

const Carousel: React.FC<CarouselProps> = ({ children, startIndex = 0 }) => {

    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const carouselId = carouselIdCounter++;

    function removeArrow(direction: 'left' | 'right') {
        document.getElementById(`${direction}-arrow-${carouselId}`)?.classList.add("hidden");
    }

    function makeArrowVisible(direction: 'left' | 'right') {
        document.getElementById(`${direction}-arrow-${carouselId}`)?.classList.remove("hidden");
    }

    useEffect(() => {
        const numChildren: number = React.Children.count(children);
        if (startIndex == 0) {
            removeArrow("left");
        }
        if (startIndex == numChildren - 1) {
            removeArrow("right");
        }
    }, []);

    const updateCarousel = (direction: 'left' | 'right') => {
        const numChildren: number = React.Children.count(children);
        if (direction === 'right') {
            setCurrentIndex((prevIndex) => {

                const willBeLastIndex: boolean = prevIndex + 1 == numChildren - 1;

                if (willBeLastIndex) {
                    removeArrow('right');
                }

                makeArrowVisible('left');

                return prevIndex + 1 == numChildren ? prevIndex : prevIndex + 1;
            });
        } else {
            setCurrentIndex((prevIndex) => {
                if (prevIndex - 1 == 0) {
                    removeArrow('left');
                }

                makeArrowVisible('right');

                return prevIndex - 1 < 0 ? prevIndex : prevIndex - 1;
            });
        }
    };

    return (
        <div className="relative pl-4">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
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
                id={`left-arrow-${carouselId}`}
                onClick={() => updateCarousel('left')}
                className="absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full left-[-30px]"
            >
                <img src={LeftArrow} alt="previous slide button" />
            </button>
            <button
                id={`right-arrow-${carouselId}`}
                onClick={() => updateCarousel('right')}
                className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-gray-400 p-2 rounded-full"
            >
                <img src={RightArrow} alt="next slide button" />
            </button>

        </div>
    );
};

export default Carousel;
