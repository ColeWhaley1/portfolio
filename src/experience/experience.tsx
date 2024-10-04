import Carousel from "../utils/carousel";
import FlexieLogo from "../assets/flexie_logo.png";
import CarolinaEastLogo from "../assets/carolina_east_logo.jpg";
import Skill from "../home/skill";

const Experience = () => {

    return (
        <div className="m-5 p-10 mx-auto rounded-md bg-gray-200 shadow-lg dark:shadow-slate-600 dark:bg-gray-100">
            <Carousel>
                <div>
                    <div className="flex space-x-8 m-2">
                        <a 
                            href="https://goflexie.com/"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img src={FlexieLogo} alt="Flexie logo" className="shadow-md h-40 w-40 rounded-md hover:scale-105"/>
                        </a>
                        <div className="text-black">
                            <div className="flex space-x-2 items-baseline">
                                <p className="font-bold text-lg">Role:</p>
                                <p className="hover:scale-105 inline-block px-4 py-2 my-2 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white shadow-md dark:shadow-slate-800">
                                    Full-Stack Developer
                                </p>
                            </div>
                            <div className="transform scale-50 origin-left">
                                <Skill>
                                    Typescript
                                </Skill>
                                <Skill>
                                    SQL
                                </Skill>
                                <Skill>
                                    React
                                </Skill>
                                <Skill>
                                    Jest
                                </Skill>
                                <Skill>
                                    NodeJS
                                </Skill>
                            </div>
                            <p className="text-gray-400 text-sm">
                                May 2024 - Current
                            </p>
                            <ul className="mt-4">
                                <li>‣ Lead an international team of developers to increase sprint velocity by 50%</li>
                                <li>‣ Developed, refactored, and tested APIs</li>
                                <li>‣ Developed, refactored, and tested APIs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={CarolinaEastLogo} alt="Carolina East Health Center logo" className="h-40 w-40 rounded-md"/>
                </div>
            </Carousel>
        </div>
    )

};

export default Experience;