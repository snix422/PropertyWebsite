import { motion, useAnimation, useInView } from "framer-motion"
import FiltersComponent from "../Filters/FiltersComponent"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import Slider from "../Header/Silder"
import RecommendsOffer from "../RecommendsOffer/RecommendsOffer"
import { useEffect, useRef } from "react"
import { delay } from "@reduxjs/toolkit/dist/utils"
import Headroom from 'react-headroom'
import Review from "../Review/Review"



const Layout = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
        }
    },[isInView])
    
    return(
        <>
        <Header />
        <Slider />
        <FiltersComponent />
        <RecommendsOffer />
        <Review />
        <Footer />
         </>
    )
}

export default Layout