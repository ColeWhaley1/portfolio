import Carousel from "../utils/carousel";
import DessertOasisPreview  from "../assets/dessert_oasis_preview.MP4";

const Projects = () => {

    return (
        <Carousel>
            <div>OutWork</div>
            <div>
                <video src={DessertOasisPreview} width="240" height="360" autoPlay={true} loop={true}/>
            </div>
        </Carousel>
    );
}

export default Projects;