import { useDispatch, useSelector } from "react-redux"
import Header from "../Header/Header";
import Footer from "../Footer/Footert";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import FilterBar from "../Filters/FilterBar";
import { FormControl, InputLabel, MenuItem, Select, Slider } from "@mui/material";
import { searchActions } from "../../app/store";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ItemsTypes } from "../../Types/Types";

const SearchComponent = () => {

    const [type, setType] = useState('');
    const [typeSale, setTypeSale] = useState('');
    const [city,setCity] = useState('');
    const [metraz,setMetraz] = useState('');
    const offers = useSelector((state:any)=>state.offers.items);
    const searchProductsRedux = useSelector((state:any)=>state.search.items);
    const [searchProducts, setSearchProducts] = useState([]);
    const [value, setValue] = useState<number[]>([1000,5000000]);

    useEffect(()=>{
       setSearchProducts(searchProductsRedux);
    },[])
    

    let items:any = [];

    const searchOffers = () => {

        if(type){
            const arr = offers.filter((offer:ItemsTypes)=>offer.type === type);
            console.log(arr);
            items = arr;
            console.log(items);
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
        if(value){
            if(items.length > 0){
                const min:any = String(value[0]);
                const max:any = String(value[1]);
                const arr1 = items.filter((offer:ItemsTypes) => min < offer.cena );
                const arr2 = arr1.filter((offer:ItemsTypes) => max > offer.cena );
                items = arr2;
            }else{
                const min:any = (value[0]);
                const max:any = (value[1]);
                const arr1 = offers.filter((offer:ItemsTypes) => min < offer.cena );
                const arr2 = arr1.filter((offer:ItemsTypes) => max > offer.cena );
                items = arr2;
            }
        }

        setSearchProducts(items);
        //dispatch(searchActions.addItem(arr));
        setCity('');
        setType('');
        setTypeSale('');
        setMetraz('');
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(value);
      };
    
    function valuetext(value: number) {
        return `${value}zł`;
      }
    
    return(
        <div className="flex flex-col">
            <Header />
            <div className="bg-search flex flex-col w-screen justify-center items-center gap-12" style={{minHeight:'55vh',padding: '50px 0 50px 0px'}}>
            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:0.5, type:"spring", stiffness: 300}} className="filter-bar flex flex-col items-center w-4/5 rounded bg-white pt-2.5 pb-2.5" style={{minHeight:'30vh'}}>
        <h3 className="text-2x1 mb-5" style={{fontFamily:'Montserrat', fontSize:'25px'}}>Wyszukaj dla Siebie dom</h3>
        <div className="flex justify-center items-center gap-2.5 flex-wrap" style={{minHeight:'20vh'}}>
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
                onChange={(e)=>setTypeSale(e.target.value)}
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
        <div className="w-3/4">
        <h2 className="mb-10">Cena(zł)</h2>
        <Slider color="primary" onChange={handleChange} max={2000000} value={value} valueLabelDisplay="on" getAriaValueText={valuetext}  getAriaLabel={() => 'Temperature range'} aria-label="zł"/>
        </div>
        <button className="bg-red-600 text-white mt-5 " style={{fontFamily:'Montserrat', width:'220px', height:'40px', borderRadius:'25px', fontSize:'20px'}} onClick={searchOffers}>Szukaj</button>
    </motion.div>
    {searchProducts.length > 0 ? <div className="flex justify-center" style={{display:'flex', gap:'50px', flexWrap:'wrap'}}>
            {searchProducts.map((offer:ItemsTypes)=>{
                return(
                    <motion.div initial={{opacity:0, x:100}} animate={{opacity:1,x:0}} transition={{delay:1, duration:1}} className="flex flex-col rounded bg-white" style={{width:'300px',height:'300px'}}>
                            <Link to={"/offerpage/" + offer.id} style={{width:'100%', height:'100%'}}> 
                            <img src={offer?.images?.imgMain} alt="obrazek" className="rounded" style={{width:'100%', height:'70%'}}></img>
                            </Link>
                            <div className="flex" style={{marginTop:'-70px'}}>
                            <LocationOnIcon />
                            <h3 className="pl-1 text-xl" style={{fontFamily:'Montserrat'}}>{offer?.city}</h3>
                            </div>
                            <div className="flex">
                            <SellIcon />
                            <h3 className="pl-1 text-xl" style={{fontFamily:'Montserrat'}}>{offer?.cena}zł</h3>  
                            </div> 
                        </motion.div>
                )
                })}
                </div> : <h2 className="text-4xl text-white" style={{fontFamily:'Montserrat'}}>Nie znaleziono wyników</h2>}
            </div>
            <Footer />
        </div>
    )
}

export default SearchComponent