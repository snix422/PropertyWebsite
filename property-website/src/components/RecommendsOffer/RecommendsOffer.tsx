import { useSelector } from "react-redux"
import {useState,useEffect} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { ItemsTypes } from "../../Types/Types";

const RecommendsOffer = () => {
    const offers = useSelector((state:any)=>state.offers.items);
    const [recommendsProducts,setRecommendsProducts] = useState([]);
    console.log(offers);

    const {ref,inView}:any= useInView({
        threshold:0.2
    });
    const animation = useAnimation();

    useEffect(()=>{
        const recommends = offers.filter((offer:ItemsTypes)=>offer.polecane === 'yes');
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
        <div ref={ref} className="bg-recommends w-screen flex flex-col justify-center items-center gap-14 pt-2 pb-2 pr-10 pl-10" style={{minHeight:'60vh'}}>
            <h2 style={{fontSize:'35px', fontFamily:'Montserrat'}}>Polecane oferty</h2>
            <div className="flex justify-center items-center gap-5">
                <motion.div animate={animation} className="flex justify-center items-center gap-5 flex-wrap">
                {recommendsProducts.map((offer:ItemsTypes)=>{
                    return(
                        <motion.div whileHover={{scale:1.1}} className="flex flex-col bg-white rounded-3x1" style={{width:'300px',height:'300px', borderRadius:'5px'}}>
                            <Link to={"/offerpage/" + offer.id} className="rounded" style={{width:'100%', height:'100%',borderRadius:'5px'}}> 
                            <img src={offer?.images?.imgMain} alt="obrazek" style={{width:'100%', height:'70%',borderRadius:'5px'}}></img>
                            </Link>
                            <div className="flex" style={{marginTop:'-80px'}}>
                            <LocationOnIcon />
                            <h3 className="text-xl pl-1" style={{fontFamily:'Montserrat'}}>{offer?.city}</h3>
                            </div>
                            <div className="flex">
                            <SellIcon />
                            <h3 className="text-xl pl-1" style={{fontFamily:'Montserrat'}}>{offer?.cena}zł</h3>  
                            </div> 
                        </motion.div>
                    )
                })}
                </motion.div>
            </div>
        </div>
    )
}

export default RecommendsOffer