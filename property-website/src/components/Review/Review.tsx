import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSlider from "./ReviewSlider";

const Review = () => {

    return(
        <>
        <div className="bg-review w-screen flex flex-col items-center pt-2" style={{minHeight:'40vh'}}>
            <h2 className="mt-5" style={{fontFamily:'Montserrat', fontSize:'40px'}}>Opinie klientów</h2>
            <ReviewSlider />
        </div>
       
        </>
    )
}

export default Review