import { useDispatch, useSelector } from "react-redux"
import Header from "../Header/Header";
import Footer from "../Footer/Footert";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import FilterBar from "../Filters/FilterBar";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { searchActions } from "../../app/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchComponent = () => {

    const searchItems = useSelector((state:any)=>state.search.items);
    console.log(searchItems);
    const local = localStorage.getItem('search');
    console.log(local)

    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [typeSale, setTypeSale] = useState('');
    const [city,setCity] = useState('');
    const [metraz,setMetraz] = useState('');
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
    const offers = useSelector((state:any)=>state.offers.items);
    const searchProductsRedux = useSelector((state:any)=>state.search.items);
    const [searchProducts, setSearchProducts] = useState<any>([]);
    const [offersRedux, setOffersRedux] = useState<any>([]);

    useEffect(()=>{
        setOffersRedux(offers);
        console.log(offersRedux);
    },[])
    
    console.log(searchProductsRedux);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(searchProductsRedux);
    },[])

    const searchOffers = () => {

        dispatch(searchActions.removeAllItems())
        setSearchProducts([]);
        console.log(type);
        console.log(typeSale);
        console.log(city);
        console.log(metraz);
        console.log(priceFrom);
        console.log(priceTo);
        console.log(offers)
        let arr = [];
        
        if(type){
            arr = offersRedux.filter((offer:any)=>offer.type === type);
            console.log(arr);
            setSearchProducts(arr);
            console.log(searchProducts);
        }
        if(typeSale){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:any)=> offer.saleType === typeSale);
                console.log(arr);
                setSearchProducts(searchProducts.filter((offer:any)=> offer.saleType == typeSale));
                console.log(searchProducts);
                
            }else{
                arr = offers.filter((offer:any)=>offer.saleType === typeSale)
                setSearchProducts(offers.filter((offer:any)=>offer.saleType === typeSale))
            }
        }
        if(city){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:any)=> offer.city === city);
                console.log(arr);
                setSearchProducts(arr);
                console.log(searchProducts);
            }else{
                const arr2 = offers.filter((offer:any)=>offer.city === city);
                console.log(arr2);
                arr = arr2;
                console.log(arr);
            }
        }
        if(metraz){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:any)=> offer.metraz < metraz);
                console.log(arr);
                setSearchProducts(arr);
                console.log(searchProducts);
            }else{
                arr = offers.filter((offer:any)=>offer.metraz < metraz);
                console.log(arr);
                setSearchProducts(arr);
                console.log(searchProducts);
            }
        }


        dispatch(searchActions.addItem(arr));
        localStorage.setItem('search', JSON.stringify(searchProducts));
       navigate('/search');
    }
    

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <Header />
            <div className="bg-search" style={{display:'flex',flexDirection:'column', width:'100vw', minHeight:'55vh', justifyContent:'center',alignItems:'center',gap:'50px', padding: '50px 0 50px 0px'}}>
            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:0.5, type:"spring", stiffness: 300}} className="filter-bar" style={{display:'flex', flexDirection:'column',alignItems:'center',width:'90vw', minHeight:'30vh', borderRadius:'15px',background:'white',paddingBottom:'10px', paddingTop:'10px'}}>
        <h3 style={{fontFamily:'Montserrat', fontSize:'25px'}}>Wyszukaj dla Siebie dom</h3>
        <div style={{display:'flex', width:'90vw', flexWrap:'wrap', justifyContent:'center',alignItems:'center', gap:'10px',height:'20vh'}}>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Typ</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={(e:any)=>setType(e.target.value)}
        >
        <MenuItem value={'mieszkanie'}>Mieszkanie</MenuItem>
        <MenuItem value={'dom'}>Dom</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'300px'}}>
        <InputLabel id="demo-simple-select-label">Sprzedaz/Wynajem</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeSale}
                label="TypeSale"
                onChange={(e:any)=>setTypeSale(e.target.value)}
        >
         <MenuItem value={'sprzedaz'}>Sprzedaz</MenuItem>
        <MenuItem value={'wynajem'}>Wynajem</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Miasto</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="City"
                onChange={(e:any)=>setCity(e.target.value)}
        >
         <MenuItem value={'Łódź'}>Lodz</MenuItem>
        <MenuItem value={'Warszawa'}>Warszawa</MenuItem>
         <MenuItem value={'Kraków'}>Krakow</MenuItem>
         <MenuItem value={'Wrocław'}>Wroclaw</MenuItem>
         <MenuItem value={'Gdańsk'}>Gdansk</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Metraz</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={metraz}
                label="Metraz"
                onChange={(e:any)=>setMetraz(e.target.value)}
        >
         <MenuItem value={30}>Do 30m2</MenuItem>
        <MenuItem value={50}>Do 50m2</MenuItem>
         <MenuItem value={100}>Do 100m2</MenuItem>
         <MenuItem value={100}>Powyzej 100</MenuItem>
         </Select>
        </FormControl>
        <input type="number" value={priceFrom} onChange={(e:any)=>setPriceFrom(e.target.value)} placeholder="Od(zł)"></input>
        <input type="number" value={priceTo} onChange={(e:any)=>setPriceTo(e.target.value)} placeholder="Do(zł)"></input>
        </div>
        <button onClick={searchOffers}>Szukaj</button>
    </motion.div>
    {searchItems.length > 0 ? <div style={{display:'flex', gap:'50px'}}>
            {searchItems.map((offer:any)=>{
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
                </div> : <h2 style={{fontSize:'40px', fontFamily:'Montserrat', color:'white'}}>Nie znaleziono wyników</h2>}
            </div>
            <Footer />
        </div>
    )
}

export default SearchComponent