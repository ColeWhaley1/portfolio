import React, { useState, ReactNode, useEffect } from 'react';
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

interface CarouselProps {
    children: ReactNode; 
    startIndex?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ children, startIndex=0 }) => {

    const [currentIndex, setCurrentIndex] = useState(startIndex);

    function removeArrow(id: 'left' | 'right') {
        document.getElementById(`${id}-arrow`)?.classList.add("hidden");
    }

    function makeArrowVisible(id: 'left' | 'right') {
        document.getElementById(`${id}-arrow`)?.classList.remove("hidden");
    }

    useEffect(() => {
        const numChildren: number = React.Children.count(children);
        if(startIndex == 0){
            removeArrow("left");
        }
        if(startIndex == numChildren - 1){
            removeArrow("right");
        }
    }, []);

    const updateCarousel = (direction: 'left' | 'right') => {
        const numChildren: number = React.Children.count(children);
        if (direction === 'right') {
            setCurrentIndex((prevIndex) => {

                const willBeLastIndex: boolean = prevIndex + 1 == numChildren - 1;

                if(willBeLastIndex){
                    removeArrow('right');
                }

                makeArrowVisible('left');

                return prevIndex + 1 == numChildren ? prevIndex : prevIndex + 1;
            });
        } else {
            setCurrentIndex((prevIndex) => {
                if(prevIndex - 1 == 0){
                    removeArrow('left');
                }

                makeArrowVisible('right');

                return prevIndex - 1 < 0 ? prevIndex : prevIndex - 1;
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
                onClick={() => updateCarousel('left')}
                className="absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full"
            >
                <img src={LeftArrow} alt="previous slide button" />
            </button>
            <button
                id="right-arrow"
                onClick={() => updateCarousel('right')}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full"
            >
                <img src={RightArrow} alt="next slide button" />
            </button>
        </div>
    );
};

export default Carousel;
