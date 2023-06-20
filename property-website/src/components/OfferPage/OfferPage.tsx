import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { offersActions } from "../../app/store";
import Header from "../Header/Header";
import Footer from "../Footer/Footert";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from "framer-motion";
import { delay } from "@reduxjs/toolkit/dist/utils";
import { ItemsTypes } from "../../Types/Types";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const OfferPage = () => {
    const offers = useSelector((state:any)=>state.offers.items);
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [value, setValue] = useState('1');
    const [index, setIndex] = useState(0);
   

    useEffect(()=>{
      setProduct(offers.filter((product:ItemsTypes)=>product.id == Number(id)))
    },[])

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };


    return(
        <>
            <Header />
            <div className='bg-page w-screen' style={{minHeight:'80vh'}}>
            {product.map((product:ItemsTypes)=>{
                const images = [product.images.imgMain,product.images.img2,product.images.img3];
                
                const nextSlider = () => {
                    if(index === images.length -1){
                        setIndex(0)
                    }else{
                        setIndex(index+1)
                    }
                }
            
                const previousSlider = () => {
                        if(index === 0){
                            setIndex(images.length -1)
                        }else{
                            setIndex(index-1)
                        }
                }
                return(
                    <div className="flex w-screen flex-col justify-center items-center gap-24 pt-24" style={{minHeight:'80vh'}}>
                        <div className="relative">
                        <motion.img initial={{opacity:0,y:75}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} src={images[index]} style={{width:'700px', height:'400px', borderRadius:'5px'}}></motion.img>
                        <div>
                            <div onClick={previousSlider} className="bg-white absolute h-8 w-8 flex justify-center items-center" style={{borderRadius:'50%',left:'2%', top:'50%'}}><ChevronLeftIcon /></div>
                            <div onClick={nextSlider} className="bg-white absolute h-8 w-8 flex justify-center items-center" style={{borderRadius:'50%',right:'2%', top:'50%'}}><ChevronRightIcon /></div>
                        </div>
                        </div>
                        <motion.div initial={{opacity:0,x:-75}} animate={{opacity:1,x:0}} transition={{delay:1,duration:1}}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
                        <Tab label="Szczegóły ogłoszenia" value="1" />
                        <Tab label="Opis" value="2" />
                        <Tab label="Kontakt" value="3" />
                     </TabList>
                     </Box>
                    <TabPanel value="1" sx={{textAlign:'center'}}>
                    <div className="flex justify-center gap-3">
                        <div className="flex flex-col items-center">
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Miasto:</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Cena:</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Metraż:</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Typ mieszkania:</h2>
                        {product.pietro ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Piętro:</h2>:null}
                        {product.winda ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Winda:</h2>:null}
                        {product.garaz ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Garaz:</h2>:null}
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>Dostępność:</h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.city}</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.cena}</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.metraz}</h2>
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.type}</h2>
                        {product.pietro ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.pietro}</h2>:null}
                        {product.winda ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.winda}</h2>:null}
                        {product.garaz ? <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.garaz}</h2>:null}
                        <h2 className="text-xl" style={{fontFamily:'Montserrat'}}>{product.dostepny}</h2>
                    </div>

                    </div>
                    </TabPanel>
                     <TabPanel value="2">
                        <div className="flex justify-center">
                            <p className="text-2xl w-3/4" style={{fontFamily:'Montserrat'}}>{product.desc}</p>
                        </div>
                        </TabPanel>
                    <TabPanel value="3">
                        <div className="flex flex-col items-center gap-5">
                            <h2 className="text-2x1 mb-5" style={{fontFamily:'Montserrat', fontSize:'25px',marginBottom:'20px'}}>Kontakt</h2>
                            <div className="flex">
                                <SmartphoneIcon />
                                <h2 className="text-3x1">{product.contact.phone}</h2>
                            </div>
                            <div className="flex">
                                <EmailIcon />
                                <h2 className="text-3x1">{product.contact.email}</h2>
                            </div>
                        </div></TabPanel>
                 </TabContext>
                 </Box>
                 </motion.div>
                    </div>
                )
            })}
            </div>
            <Footer />
        </>
    )
}

export default OfferPage