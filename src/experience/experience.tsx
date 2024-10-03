import Carousel from "../utils/carousel";
import FlexieLogo from "../assets/flexie_logo.png";
import CarolinaEastLogo from "../assets/carolina_east_logo.jpg";

const Experience = () => {

    return (
        <div className="m-5 p-10 mx-auto rounded-md bg-gray-200 shadow-lg dark:shadow-slate-600 dark:bg-gray-100">
            <Carousel>
                <div>
                    <img src={FlexieLogo} alt="Flexie logo" className="h-40 w-40 rounded-md"/>

                </div>
                <div>
                    <img src={CarolinaEastLogo} alt="Carolina East Health Center logo" className="h-40 w-40 rounded-md"/>
                </div>
            </Carousel>
        </div>
    )

};

export default Experience;