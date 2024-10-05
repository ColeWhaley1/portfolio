import Carousel from "../utils/carousel";

const Projects = () => {

    return (
        <Carousel>
            <div>OutWork</div>
            <div>
                <video width="240" height="360">
                    <source src="../assets/dessert_oasis_preview.MP4" type="video/mp4"/>
                </video>
            </div>
        </Carousel>
    );
}

export default Projects;