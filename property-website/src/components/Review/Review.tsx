import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSlider from "./ReviewSlider";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Review = () => {

    const {ref,inView}:any= useInView({
        threshold:0.2
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1,
                y:0,
                transition:{
                    type:'spring', duration:1.5, bounce:0.3, delay:1
                }
            })
        }
        if(!inView){
            animation.start({opacity:0,y:100})
        }
        console.log('UseInView,', inView)
    },[inView])

    return(
        <>
        <motion.div className="bg-review w-screen flex flex-col items-center pt-2" style={{minHeight:'40vh'}}>
            <motion.div ref={ref} animate={animation} className="flex flex-col items-center">
            <h2 className="mt-5" style={{fontFamily:'Montserrat', fontSize:'40px'}}>Opinie klientów</h2>
            <ReviewSlider />
            </motion.div>
        </motion.div>
       
        </>
    )
}

export default Review