import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/preview.jpg'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logoTransparent from '../../assets/logo.jpg'


const Header = () => {
    const navigate = useNavigate();
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    return(
    <div className="bg w-screen flex justify-center items-center gap-5 relative" style={{height:'12vh'}}>
        <img  className="absolute bg-transparent left-12" style={{width:'150px', height:'12vh'}} src={logoTransparent} alt='logo' onClick={()=>navigate('/')} />
        <nav className="flex gap-24 ml-96 xl:ml-96 xl:gap-32 lg:ml-72 lg:gap-20 md:gap-10 md:ml-40">
        <Link className="link text-xl   max-sm:invisible sm:invisible md:visible lg:visible xl:visible 2x1:visible" to='/' style={{fontFamily:'Montserrat'}}>Home</Link>
        <Link className="link text-2xl  max-sm:invisible sm:invisible md:visible lg:visible xl:visible 2x1:visible" to='/about' style={{fontFamily:'Montserrat'}}>O nas</Link>
        <Link className="link text-2xl  max-sm:invisible sm:invisible md:visible lg:visible xl:visible 2x1:visible" to='/team' style={{fontFamily:'Montserrat'}}>Nasz zespol</Link>
        </nav>
        <MenuIcon className='absolute right-12 visible sm:visible md:invisible lg:invisible xl:invisible 2x1:invisible' onClick={()=>{setIsBurgerMenuOpen(true)}} />
        <Drawer anchor='right' open={isBurgerMenuOpen}>
            <Box className="relative" sx={{width:'300px',height:'100vh'}}>
                <CloseIcon className='absolute left-3 top-3' onClick={()=>{setIsBurgerMenuOpen(false)}} />
                <nav className="flex flex-col items-center gap-10 mt-20">
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/about' >O nas</Link>
                <Link className="link" to='/team'>Nasz zespol</Link>
        </nav>
            </Box>
        </Drawer>
    </div>
   
    )
}

export default Header