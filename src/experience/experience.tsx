import Carousel from "../utils/carousel";
import FlexieLogo from "../assets/flexie_logo.png";
import CarolinaEastLogo from "../assets/carolina_east_logo.jpg";
import Skill from "../home/skill";

const Experience = () => {

    return (
        <div className="m-5 p-10 mx-auto rounded-md bg-gray-200 shadow-lg dark:shadow-slate-600 dark:bg-gray-300">
            <Carousel>
                <div>
                    <div className="flex space-x-8 m-2 items-center">
                        <a
                            href="https://goflexie.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={FlexieLogo} alt="Flexie logo" className="shadow-md h-60 w-60 rounded-md hover:scale-105" />
                        </a>
                        <div className="text-black">
                            <div className="flex space-x-2 items-baseline">
                                <p className="font-bold text-lg">Role:</p>
                                <p className="hover:scale-105 inline-block px-4 py-2 my-1 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white shadow-md dark:shadow-slate-600">
                                    Full-Stack Developer
                                </p>
                            </div>
                            <div className="transform scale-75 origin-left">
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
                            <p className="text-gray-500 text-sm">
                                May 2024 - Current
                            </p>
                            <div className="rounded-md bg-gray-300 p-2 mt-4 overflow-auto max-h-36 dark:bg-gray-200">
                                <ul>
                                    <li>‣ Lead an international team of developers to increase sprint velocity by 50%</li>
                                    <li>‣ Developed, refactored, and tested APIs</li>
                                    <li>‣ Created PostgreSQL queries for backend services</li>
                                    <li>‣ Helped implement an authorization app using React, Next.js, and Tailwind</li>
                                    <li>‣ Created unit tests with Jest to achieve a 98% crash free rate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex space-x-8 m-2 items-center">
                        <a
                            href="https://www.carolinaeasthealth.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={CarolinaEastLogo} alt="Flexie logo" className="shadow-md h-60 w-60 rounded-md hover:scale-105 mt-4" />
                        </a>
                        <div className="text-black">
                            <div className="flex space-x-2 items-baseline">
                                <p className="font-bold text-lg">Role:</p>
                                <p className="hover:scale-105 inline-block px-4 py-2 my-1 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white shadow-md dark:shadow-slate-600">
                                    Computer Tech Assistant
                                </p>
                            </div>
                            <div className="transform scale-75 origin-left">
                                <Skill>
                                    VBA
                                </Skill>
                                <Skill>
                                    Data Analysis
                                </Skill>
                                <Skill>
                                    Excel
                                </Skill>
                            </div>
                            <p className="text-gray-500 text-sm">
                                May 2022 - Aug 2023
                            </p>
                            <div className="rounded-md bg-gray-300 p-2 mt-4 overflow-auto max-h-36 dark:bg-gray-200">
                                <ul>
                                    <li>‣ Implemented VBA macro to reduce data entry time from 3-4 hours to under a minute (98% cut)</li>
                                    <li>‣ Assisted with telemetry system accuracy and provided support for online meeting software (Zoom, Teams, Webex).</li>
                                    <li>‣ Analyzed Emergency Room data and developed analytics to identify areas for improvement in efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )

};

export default Experience;