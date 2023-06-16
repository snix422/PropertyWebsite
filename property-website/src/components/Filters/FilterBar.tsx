import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions, teamActions } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { ItemsTypes } from "../../Types/Types";


const FilterBar = () => {

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
    let items:any = [];

  
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

    /*const searchOffers = () => {

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
            arr = offers.filter((offer:ItemsTypes)=>offer.type === type);
            console.log(arr);
            setSearchProducts(arr);
            console.log(searchProducts);
        }
        if(typeSale){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:ItemsTypes)=> offer.saleType === typeSale);
                console.log(arr);
                setSearchProducts(searchProducts.filter((offer:ItemsTypes)=> offer.saleType == typeSale));
                console.log(searchProducts);
                
            }else{
                arr = offers.filter((offer:ItemsTypes)=>offer.saleType === typeSale)
                setSearchProducts(offers.filter((offer:ItemsTypes)=>offer.saleType === typeSale))
            }
        }
        if(city){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:ItemsTypes)=> offer.city === city);
                console.log(arr);
                setSearchProducts(arr);
                console.log(searchProducts);
            }else{
                const arr2 = offers.filter((offer:ItemsTypes)=>offer.city === city);
                console.log(arr2);
                arr = arr2;
                console.log(arr);
            }
        }
        if(metraz){
            if(searchProducts.length>0){
                arr = searchProducts.filter((offer:ItemsTypes)=> offer.metraz < Number(metraz));
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
    }*/

    const searchOffers = () => {

        if(type){
            const arr = offers.filter((offer:ItemsTypes)=>offer.type === type);
            items = arr;
        }
        if(typeSale){
            if(items.length > 0){
                const arr = items.filter((offer:ItemsTypes)=>offer.saleType === typeSale);
                items = arr;
                
            }else{
                const arr = offers.filter((offer:ItemsTypes)=>offer.saleType === typeSale);
                items = arr;
            }
        }
        if(city){
            if(items.length > 0){
                const arr = items.filter((offer:ItemsTypes)=> offer.city === city);
                items = arr;
            }else{
                const arr = offers.filter((offer:ItemsTypes)=> offer.city == city);
                items = arr;
            }
        }
        if(metraz){
            if(items.length > 0){
                if(metraz == '101'){
                    const arr = items.filter((offer:ItemsTypes)=> offer.metraz >= Number(metraz));
                    items = arr;
                  
                }else{
                    const arr = items.filter((offer:ItemsTypes)=> offer.metraz < Number(metraz));
                    items = arr;  
                }       
            }else{
                if(metraz == '101'){
                    const arr = offers.filter((offer:ItemsTypes)=> offer.metraz >= Number(metraz));
                     items = arr;
                }else{
                    const arr = offers.filter((offer:ItemsTypes)=> offer.metraz < Number(metraz));
                    items = arr;
                }
            }
        }
        dispatch(searchActions.addItem(items));
        setCity('');
        setType('');
        setTypeSale('');
        setMetraz('');
        navigate('/search');
    }

    return(
        
        <motion.div className="w-full flex flex-col items-center">
        <h3 className="text-center mb-20" style={{fontFamily:'Montserrat', fontSize:'35px'}}>Wyszukaj dla Siebie wymarzony dom</h3>
        <div style={{display:'flex', width:'90vw', flexWrap:'wrap', justifyContent:'center',alignItems:'center', gap:'15px',minHeight:'20vh'}}>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Typ</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={(e)=>setType(e.target.value)}
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
                onChange={(e)=>{
                    const value = e.target.value
                    setTypeSale(value)}}
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
                onChange={(e)=>setCity(e.target.value)}
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
                onChange={(e)=>setMetraz(e.target.value)}
        >
        <MenuItem value={50}>Do 50m2</MenuItem>
        <MenuItem value={100}>Do 100m2</MenuItem>
        <MenuItem value={101}>Powyżej 100m2</MenuItem>
        </Select>
        </FormControl>
        </div>
        <button className="bg-red-600 text-white mt-5 " style={{fontFamily:'Montserrat', width:'220px', height:'40px', borderRadius:'25px', fontSize:'20px'}} onClick={searchOffers}>Szukaj</button>
    </motion.div>)
}

export default FilterBar