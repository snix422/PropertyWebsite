import { useSelector } from "react-redux";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ReviewSlider = () => {
    const reviews = useSelector((state:any)=>state.reviews.items);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div style={{maxWidth:'70vw', maxHeight:'50vh'}}>
            <Slider {...settings}>
                {reviews.map((review:any)=>{
                    return(
                        <div className="max-md:w-52 transparent pb-10 p3-10 pl-1 pr-1 mt-10 mr-10 w-100 rounded hidden w-2/4 max-md:w-52" style={{border:'2px solid blue'}}>
                            <h3 className="pt-3 pb-2 text-center text-2xl font-bold" style={{fontFamily:'Montserrat'}}>{review.person} {review.client}</h3>
                            <p className="text-xl text-center" style={{fontFamily:'Montserrat'}}>"{review.content}"</p>
                        </div>
                    )
                })}  
            </Slider>

        </div>
    )
}

export default ReviewSlider