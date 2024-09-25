import { useEffect, useState } from "react";
import DarkModeIcon from "../assets/dark_mode.svg";
import LightModeIcon from "../assets/light_mode.svg";
import DownloadLightIcon from "../assets/download_light.svg";
import DownloadDarkIcon from "../assets/download_dark.svg";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        const lightIcon = document.getElementById("light-icon");
        const darkIcon = document.getElementById("dark-icon");

        const newTheme = !darkMode;
        setDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            lightIcon?.classList.add("fadeInUp");
            darkIcon?.classList.add("fadeOutUp");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            lightIcon?.classList.add("fadeOutUp");
            darkIcon?.classList.add("fadeInUp");
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <>
            <div className="p-8 animate-fadeInLeft">
                <div className="hover:scale-105 inline-block px-4 py-2 bg-gray-200 rounded-full dark:bg-gray-600">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Cole Whaley
                    </h1>
                </div>
                <div>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 my-2 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white">
                        Full-stack Software Engineer
                    </h2>
                </div>
                <div>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Typescript
                    </h2>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Javascript
                    </h2>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Python
                    </h2>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        SQL
                    </h2>
                </div>
            </div>

            <div className="p-8 animate-fadeInLeft">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h1>
            </div>

            <div className="p-8 animate-fadeInLeft">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
            </div>

            <div className="p-8 animate-fadeInLeft">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h1>
            </div>

            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 px-4 py-2 text-gray-900 rounded-full dark:text-white">
                <div className="relative w-10 h-10 hover:scale-105">

                    <img id="light-icon" src={LightModeIcon} className={`absolute w-10 h-10 ${darkMode ? 'animate-fadeInUp' : 'animate-fadeOutUp'}`}/>
                    <img id="dark-icon" src={DarkModeIcon} className={`absolute w-10 h-10 ${darkMode ? 'animate-fadeOutUp' : 'animate-fadeInUp'}`} />

                </div>
            </button>

            <a
                href="../public/Resume-Cover-Letter.zip"
                download="Resume-Cover-Letter.zip"
                className="fixed top-4 right-20 px-4 py-2 text-gray-900 rounded-full dark:text-white hover:scale-105">
                <div className="relative w-10 h-10">
                    {darkMode ? <img src={DownloadLightIcon} className="h-10 w-10"/> : <img src={DownloadDarkIcon} className="h-10 w-10"/>}
                </div>
            </a>
        </>
    );
};

export default Home;
