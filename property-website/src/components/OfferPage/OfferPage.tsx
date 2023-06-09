import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { offersActions } from "../../app/store";
import Header from "../Header/Header";
import Footer from "../Footer/Footert";

const OfferPage = () => {
    const offers = useSelector((state:any)=>state.offers.items);
    console.log(offers);
    const id:any = useParams();
    console.log(id);
    const [product, setProduct] = useState<any>([]);
   

    useEffect(()=>{
      setProduct(offers.filter((product:any)=>product.id == id.id))
    },[])

    return(
        <>
            <Header />
            <div className='bg-page' style={{minHeight:'80vh', width:'100vw', flexDirection:'column', alignItems:'center'}}>
            {product.map((product:any)=>{
                return(
                    <div style={{display:'flex', width:'100vw',minHeight:'80vh%', justifyContent:'center', alignItems:'center', gap:'100px', border:'2px solid red', paddingTop:'100px'}}>
                        <img src={product.images.imgMain} style={{width:'700px', height:'400px', borderRadius:'5px'}}></img>
                        <div style={{display:'flex', flexDirection:'column', background:'white', borderRadius:'15px', gap:'20px', height:'300px', width:'300px'}}>
                        <h2 style={{fontFamily:'Montserrat', textAlign:'center', marginTop:'20px'}}>Szczegóły ogłoszenia</h2>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', borderRadius:'15px', paddingLeft:'10px'}}>
                            <h2 style={{fontFamily:'Montserrat'}}>Miasto: {product.city}</h2>
                            <h2 style={{fontFamily:'Montserrat'}}>Cena: {product.cena}zł</h2>
                            <h2 style={{fontFamily:'Montserrat'}}>Metraż: {product.metraz}m2</h2>
                            <h2 style={{fontFamily:'Montserrat'}}>Typ mieszkania: {product.type}</h2>
                            {product.pietro ? <h2 style={{fontFamily:'Montserrat'}}>Piętro: {product.pietro}</h2>:null}
                            {product.winda ? <h2 style={{fontFamily:'Montserrat'}}>Winda: {product.winda}</h2>:null}
                            {product.garaz ? <h2 style={{fontFamily:'Montserrat'}}>Garaz: {product.garaz}</h2>:null}
                            <h2 style={{fontFamily:'Montserrat'}}>Dostępność: {product.dostepny}</h2>
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <Footer />
        </>
    )
}

export default OfferPage