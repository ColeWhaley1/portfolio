import React, { useState, ReactNode, useEffect } from 'react';
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

interface CarouselProps {
    children: ReactNode;
    startIndex?: number;
    arrow_side_margin?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, startIndex = 0, arrow_side_margin = 1 }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(startIndex > 0);
    const [isRightArrowVisible, setIsRightArrowVisible] = useState(startIndex < React.Children.count(children) - 1);

    useEffect(() => {
        const numChildren: number = React.Children.count(children);

        setIsLeftArrowVisible(currentIndex > 0);
        setIsRightArrowVisible(currentIndex < numChildren - 1);
    }, [currentIndex, children]);

    const updateCarousel = (direction: 'left' | 'right') => {
        const numChildren: number = React.Children.count(children);
        if (direction === 'right') {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex < numChildren) {
                    setIsLeftArrowVisible(true);
                    setIsRightArrowVisible(nextIndex < numChildren - 1);
                    return nextIndex;
                }
                return prevIndex;
            });
        } else {
            setCurrentIndex((prevIndex) => {
                const prevNewIndex = prevIndex - 1;
                if (prevNewIndex >= 0) {
                    setIsRightArrowVisible(true);
                    setIsLeftArrowVisible(prevNewIndex > 0);
                    return prevNewIndex;
                }
                return prevIndex;
            });
        }
    };

    return (
        <div className="relative pl-4 overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="min-w-full relative">
                        {child}
                    </div>
                ))}
            </div>
            
            {isLeftArrowVisible && (
                <button
                    onClick={() => updateCarousel('left')}
                    className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full outline outline-gray-500 dark:outline-white left-${arrow_side_margin}`}
                    style={{ left: `${arrow_side_margin}rem` }}
                >
                    <img src={LeftArrow} alt="previous slide button" />
                </button>
            )}

            {isRightArrowVisible && (
                <button
                    onClick={() => updateCarousel('right')}
                    className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full outline outline-gray-500 dark:outline-white`}
                    style={{ right: `${arrow_side_margin}rem` }}
                >
                    <img src={RightArrow} alt="next slide button" />
                </button>
            )}
        </div>
    );
};

export default Carousel;
