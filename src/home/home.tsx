import { useEffect, useState } from "react";
import DarkModeIcon from "../assets/dark_mode.svg";
import LightModeIcon from "../assets/light_mode.svg";
import DownloadLightIcon from "../assets/download_light.svg";
import DownloadDarkIcon from "../assets/download_dark.svg";
import GitLightIcon from "../assets/git_light.png";
import GitDarkIcon from "../assets/git_dark.png";
import LinkedInIcon from "../assets/linkedin.png";
import CopyLight from "../assets/copy_light.png";
import CheckLight from "../assets/check_light.png";
import Experience from "../experience/experience";
import Skill from "./skill";
import LocationIcon from "../assets/location.svg";
import Projects from "../projects/projects";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isContactExpanded, setIsContactExpanded] = useState(false);

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

    const handleContactEnter = () => {

        const div = document.getElementById("contactMe");

        const width = div!.offsetWidth;
        const height = div!.offsetHeight;

        div!.style.setProperty('--contact-width', `${width}px`);
        div!.style.setProperty('--contact-height', `${height}px`);

        div!.classList.remove("animate-collapse");
        div!.classList.add("animate-expand");

        setIsContactExpanded(true);

        // animate expand text
        const contactTextDiv = document.getElementById("contactMeText");
        contactTextDiv?.classList.add("animate-textExpand");
    };

    const handleContactLeave = () => {

        const div = document.getElementById("contactMe");

        const width = div!.offsetWidth;
        const height = div!.offsetHeight;

        div!.style.setProperty('--contact-width', `${width}px`);
        div!.style.setProperty('--contact-height', `${height}px`);

        div!.classList.remove("animate-expand");
        div!.classList.add("animate-collapse");

        // remove expand animation
        const contactTextDiv = document.getElementById("contactMeText");
        contactTextDiv?.classList.remove("animate-textExpand");

        setIsContactExpanded(false);
    };

    const copyToClipboard = (str: string, id: string): void => {
        navigator.clipboard.writeText(str);
        const icon: HTMLImageElement | HTMLElement | null = document.getElementById(id);
        
        if(icon && icon instanceof HTMLImageElement){
            icon.src = CheckLight;
        }
    };

    function ContactMeTitle() {
        return <h1>Contact Me</h1>
    }

    function ContactMeInfo() {
        return (
        <div className="text-center">
            <div className="relative w-10 h-10 mx-auto hover:scale-105 pb-12">
                <a 
                href="https://www.linkedin.com/in/cole-whaley-93b2b01b1/"
                target="_blank" 
                rel="noopener noreferrer">
                    <img src={LinkedInIcon}/>
                </a>
            </div>
            <div className="flex space-x-2 justify-center">
                <p className="font-bold">
                    colewhaley1@gmail.com 
                </p>
                <div className="h-5 w-5 hover:scale-105" onClick={() => copyToClipboard("colewhaley1@gmail.com", "copyEmail")}><img id="copyEmail" src={CopyLight} alt="copy to clipboard"/></div>
            </div>
            <p className="font-bold">
                (252)-571-6524 
            </p>

        </div>
        )
    }

    function ContactMeMessage() {
        const div = document.getElementById("contactMe");

        // upon page load, default to ContactMeTitle
        if(!div){
            return <ContactMeTitle />
        }

        return isContactExpanded ? <ContactMeInfo /> : <ContactMeTitle />;
    }

    return (
        <>
            <div 
            id="contactMe" 
            onMouseEnter={handleContactEnter}
            onMouseLeave={handleContactLeave}
            className="fixed z-50 left-1/2 transform -translate-x-1/2 top-0 w-40 h-10 bg-red-500 rounded-b-full flex items-center justify-center shadow-md dark:shadow-slate-800">
                <div id="contactMeText">
                    <ContactMeMessage/>
                </div>
            </div>
            <div className="p-8 animate-fadeInLeft">
                    <div className="flex gap-4 items-baseline my-2">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white hover:scale-105 inline-block px-4 py-2 bg-gray-200 rounded-full dark:bg-gray-600 shadow-md dark:shadow-slate-800">
                            Cole Whaley
                        </h1>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 hover:scale-105 inline-block px-4 py-2 bg-gray-200 rounded-full dark:bg-gray-700 shadow-md">
                            <div className="flex gap-2 items-baseline">
                                <img src={LocationIcon} alt="Location icon (pin drop)" className="transform translate-y-1"/>
                                <div>Chapel Hill, NC</div>
                            </div>
                        </h2>
                    </div>

                <div>
                    <h2 className="hover:scale-105 inline-block px-4 py-2 my-2 text-blue-900 bg-blue-300 rounded-full dark:bg-blue-500 dark:text-white shadow-md dark:shadow-slate-800">
                        Full-stack Software Engineer
                    </h2>
                </div>
                <div className="flex space-x-2">
                    <Skill>
                        Typescript
                    </Skill>
                    <Skill>
                        Javascript
                    </Skill>
                    <Skill>
                        SQL
                    </Skill>
                    <Skill>
                        Python
                    </Skill>
                </div>
            </div>

            <div className="mx-8 p-8 animate-fadeInLeft">
                <Experience/>
            </div>

            <div className="mx-8 p-8 animate-fadeInLeft">
                <Projects/>
            </div>

            <div className="fixed top-6 right-6 flex space-x-8">
                <div className="fixed top-4 right-4 h-14 w-52 bg-gray-300 dark:bg-gray-600 p-4 rounded-full opacity-75 z-0"></div>
                <a 
                    href="https://github.com/ColeWhaley1"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-105">
                    <div className="relative w-10 h-10">
                        {darkMode ? <img src={GitLightIcon} className="h-10 w-10"/> : <img src={GitDarkIcon} className="h-10 w-10"/>}
                    </div>
                </a>
                <a
                    href="/portfolio/Resume-Cover-Letter.zip"
                    download="Resume-Cover-Letter.zip"
                    className="text-gray-900 rounded-full dark:text-white hover:scale-105">
                    <div className="relative w-10 h-10">
                        {darkMode ? <img src={DownloadLightIcon} className="h-10 w-10"/> : <img src={DownloadDarkIcon} className="h-10 w-10"/>}
                    </div>
                </a>
                <button
                    onClick={toggleDarkMode}
                    className="text-gray-900 rounded-full dark:text-white">
                    <div className="relative w-10 h-10 hover:scale-105">

                        <img id="light-icon" src={LightModeIcon} className={`absolute w-10 h-10 ${darkMode ? 'animate-fadeInUp' : 'animate-fadeOutUp'}`}/>
                        <img id="dark-icon" src={DarkModeIcon} className={`absolute w-10 h-10 ${darkMode ? 'animate-fadeOutUp' : 'animate-fadeInUp'}`} />

                    </div>
                </button>
            </div>

        </>
    );
};

export default Home;
