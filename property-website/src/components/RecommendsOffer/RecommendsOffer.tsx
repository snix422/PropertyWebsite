import { useSelector } from "react-redux"
import {useState,useEffect} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';

const RecommendsOffer = () => {
    const offers = useSelector((state:any)=>state.offers.items);
    const [recommendsProducts,setRecommendsProducts] = useState([]);
    console.log(offers);

    useEffect(()=>{
        const recommends = offers.filter((offer:any)=>offer.polecane === 'yes');
        setRecommendsProducts(recommends);
        console.log(recommendsProducts);
    },[])
    
    return(
        <div style={{width:'100vw', minHeight:'30vh', display:'flex',flexDirection:'column', alignItems:'center',paddingTop:'20px',paddingBottom:'20px'}}>
            <h2 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'20px'}}>Polecane oferty</h2>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'20px', border:'2px solid blue'}}>
                {recommendsProducts.map((offer:any)=>{
                    return(
                        <div style={{display:'flex', flexDirection:'column', width:'300px',height:'300px', border:'2px solid red',borderRadius:'15px'}}>
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
            </div>
        </div>
    )
}

export default RecommendsOffer