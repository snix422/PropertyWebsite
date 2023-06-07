import { useSelector } from "react-redux"
import {useState,useEffect} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const RecommendsOffer = () => {
    const offers = useSelector((state:any)=>state.offers.items);
    const [recommendsProducts,setRecommendsProducts] = useState([]);
    console.log(offers);

    const {ref,inView}:any= useInView({
        threshold:0.2
    });
    const animation = useAnimation();

    useEffect(()=>{
        const recommends = offers.filter((offer:any)=>offer.polecane === 'yes');
        setRecommendsProducts(recommends);
        console.log(recommendsProducts);
    },[])

    useEffect(()=>{
        if(inView){
            animation.start({
                x:0,
                opacity:1,
                transition:{
                    type:'spring', duration:1.5, bounce:0.3, delay:1
                }
            })
        }
        if(!inView){
            animation.start({x:-75,opacity:0})
        }
        console.log('UseInView,', inView)
    },[inView])
    
    return(
        <div ref={ref} className="bg-recommends" style={{width:'100vw', minHeight:'40vh', display:'flex',flexDirection:'column', alignItems:'center',paddingTop:'20px',paddingBottom:'20px',marginTop:'-5vh'}}>
            <h2 style={{fontFamily:'Montserrat', fontSize:'35px', marginBottom:'20px'}}>Polecane oferty</h2>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <motion.div animate={animation} style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'20px'}}>
                {recommendsProducts.map((offer:any)=>{
                    return(
                        <div style={{display:'flex', flexDirection:'column', width:'300px',height:'300px',borderRadius:'15px', background:'white'}}>
                            <img alt="obrazek" style={{width:'100%', height:'70%'}}></img>
                            <div style={{display:'flex'}}>
                            <LocationOnIcon />
                            <h3 style={{fontFamily:'Montserrat', fontSize:'20px',paddingLeft:'5px'}}>{offer?.city}</h3>
                            </div>
                            <div style={{display:'flex'}}>
                            <SellIcon />
                            <h3 style={{fontFamily:'Montserrat', fontSize:'20px',paddingLeft:'5px'}}>{offer?.cena}zł</h3>  
                            </div> 
                        </div>
                    )
                })}
                </motion.div>
            </div>
        </div>
    )
}

export default RecommendsOffer