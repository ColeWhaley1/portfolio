import Carousel from "../utils/carousel";
import DessertOasisPreview from "../assets/dessert_oasis_preview.MP4";
import AppPreviewBg from "../assets/app_preview_bg.avif?url";

const Projects = () => {
    return (
        <Carousel>
            <div>OutWork</div>
            <div className="relative flex space-x-4 justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${AppPreviewBg})`, opacity: 0.7 }}
                />

                {/* extra space to push video towards middle */}
                <div className="w-1/3"></div>

                <div className="relative z-10 flex w-full">
                    <div className="m-12">
                        <video 
                            src={DessertOasisPreview} 
                            width="250" 
                            autoPlay 
                            muted 
                            loop={true} 
                            className="rounded-3xl outline outline-4 outline-black"
                        />
                    </div>

                    <div className="flex p-4 items-center">
                        <div className="text-black text-4xl font-bold">
                            Dessert Oasis
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default Projects;
