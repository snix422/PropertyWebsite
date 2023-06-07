import { motion, useAnimation, useInView } from "framer-motion"
import FiltersComponent from "../Filters/FiltersComponent"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import Slider from "../Header/Silder"
import RecommendsOffer from "../RecommendsOffer/RecommendsOffer"
import { useEffect, useRef } from "react"
import { delay } from "@reduxjs/toolkit/dist/utils"

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
         <motion.div variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
        >
        <div ref={ref} style={{minHeight:'220vh', display:'flex', flexDirection:'column'}}>
        <Header />
        <Slider />
        <FiltersComponent />
        </div>
        <RecommendsOffer />
        </motion.div>
         <Footer />
         </>
    )
}

export default Layout