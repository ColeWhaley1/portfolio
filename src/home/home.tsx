import { useEffect, useState } from "react";
import DarkModeIcon from "../assets/dark_mode.png";
import LightModeIcon from "../assets/light_mode.png";

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
                <div className="inline-block px-4 py-2 bg-gray-200 rounded-full dark:bg-gray-600">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Cole Whaley
                    </h1>
                </div>
                <div>
                    <h2 className="inline-block px-4 py-2 my-2 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white">
                        Full-stack Software Engineer
                    </h2>
                </div>
                <div>
                    <h2 className="inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Typescript
                    </h2>
                    <h2 className="inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Javascript
                    </h2>
                    <h2 className="inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
                        Python
                    </h2>
                    <h2 className="inline-block px-4 py-2 mr-2 text-yellow-900 bg-yellow-300 rounded-full dark:bg-yellow-400 dark:text-gray-900">
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
                <div className="relative w-10 h-10">

                    <img id="light-icon" src={LightModeIcon} alt="light mode icon" className={`absolute ${darkMode ? 'animate-fadeInUp' : 'animate-fadeOutUp'}`}/>
                    <img id="dark-icon" src={DarkModeIcon} alt="dark mode icon" className={`absolute ${darkMode ? 'animate-fadeOutUp' : 'animate-fadeInUp'}`} />

                </div>
            </button>
        </>
    );
};

export default Home;
