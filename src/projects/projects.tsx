import Carousel from "../utils/carousel";
import DessertOasisPreview from "../assets/dessert_oasis_preview.MP4";
import OutWorkPreview from "../assets/out_work_preview.MP4";
import AppPreviewBg from "../assets/app_preview_bg.avif?url";
import Skill from "../home/skill";

const Projects = () => {
    return (
        <Carousel arrow_side_margin={4}>
            {/* slide 1 OutWork */}
            <div className="relative flex flex-col space-x-0 md:space-x-4 justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${AppPreviewBg})`, opacity: 0.5}}
                />

                <div className="relative z-10 flex w-full items-center justify-center">
                    <div className="m-6 md:m-12">
                        <video 
                            src={OutWorkPreview} 
                            width="300" 
                            autoPlay 
                            muted 
                            loop={true} 
                            className="rounded-3xl outline outline-4 outline-black"
                        />
                    </div>

                    <div className="p-6 md:p-12 rounded-lg bg-white bg-opacity-70 dark:bg-opacity-50 backdrop-blur-lg flex items-center shadow-lg">

                        <div className="text-black text-lg md:text-2xl space-y-4">
                            <div className="font-bold">Out Work 💪🏼</div>
                            <div className="flex space-x-2 text-sm">
                                <Skill>Flutter/Dart</Skill>
                                <Skill>Firebase</Skill>
                                <Skill>APIs</Skill>
                            </div>
                            <p className="text-sm md:text-base max-w-64">
                                I don't enjoy working out. So, I have to keep myself accountable. OutWork allows users to create workouts and upload their own photos or videos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* slide 2 Dessert Oasis */}
            <div className="relative flex flex-col space-x-0 md:space-x-4 justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${AppPreviewBg})`, opacity: 0.5}}
                />

                <div className="relative z-10 flex w-full items-center justify-center">
                    <div className="m-6 md:m-12">
                        <video 
                            src={DessertOasisPreview} 
                            width="300" 
                            autoPlay 
                            muted 
                            loop={true} 
                            className="rounded-3xl outline outline-4 outline-black"
                        />
                    </div>

                    <div className="p-6 md:p-12 rounded-lg bg-white bg-opacity-70 dark:bg-opacity-50 backdrop-blur-lg flex items-center shadow-lg">

                        <div className="text-black text-lg md:text-2xl space-y-4">
                            <div className="font-bold">Dessert 🍩asis</div>
                            <div className="flex space-x-2 text-sm">
                                <Skill>Swift</Skill>
                                <Skill>iOS</Skill>
                                <Skill>APIs</Skill>
                            </div>
                            <p className="text-sm md:text-base max-w-64">
                                Love dessert? Me too. Here's an iOS app filled with recipes for international cakes, pies, cookies, pastries, and much more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Projects;
