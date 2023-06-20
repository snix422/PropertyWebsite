import { Link } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import arrowUp from '../../assets/arrow-up-340-svgrepo-com.svg'


const Footer = () => {
    return(
    <div className="flex flex-col bg-black items-center" style={{paddingTop:'15px', paddingBottom:'30px'}}>
    <ScrollToTop smooth={true} top={500} component={<KeyboardDoubleArrowUpIcon />} color="blue" height="20" >
    </ScrollToTop>
    <div className="flex gap-72 2x1:flex-row xl:flex-row lg:flex-row lg:gap-14 md:flex-row md:gap-14 sm:flex-row sm:gap-12 max-sm:flex-col max-sm:gap-10 w-screen justify-center items-center" style={{minHeight:'25vh'}}>
        <div className="flex flex-col">
            <Link to='/' className="text-white" style={{fontFamily:'Montserrat'}}> Home</Link>
            <Link to='/about' className="text-white" style={{fontFamily:'Montserrat'}}> O nas</Link>
            <Link to='/team' className="text-white" style={{fontFamily:'Montserrat'}}> Team</Link>
            <Link to='/contact' className="text-white" style={{fontFamily:'Montserrat'}}> Kontakt</Link>
        </div>
        <div className="flex flex-col items-center" style={{gap:'5px'}}>
            <h3 className="text-white" style={{fontFamily:'Montserrat'}}>Kontakt:</h3>
            <div className="flex" style={{gap:'10px'}}>
                <BusinessIcon sx={{color:'white'}}></BusinessIcon>
                <h3 className="text-white" style={{fontFamily:'Montserrat'}}>ul.Sienkiewicza 53 Lodz</h3>
            </div>
            <div className="flex" style={{gap:'10px'}}>
                <SmartphoneIcon sx={{color:'white'}}></SmartphoneIcon>
                <h3 className="text-white" style={{fontFamily:'Montserrat'}}>666 666 666</h3>
            </div>
            <div className="flex" style={{gap:'10px'}}>
                <EmailIcon sx={{color:'white'}}></EmailIcon>
                <h3 className="text-white" style={{fontFamily:'Montserrat'}}>nieruchomości.gmail@.com</h3>
            </div> 
        </div>
        <div className="flex flex-col items-center" style={{gap:'10px'}}>
            <h3 className="text-white" style={{fontFamily:'Montserrat'}}>Sledz nas:</h3>
            <div className="flex" style={{gap:'5px'}}>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><FacebookIcon sx={{color:'white'}}></FacebookIcon></div>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><InstagramIcon sx={{color:'white'}}></InstagramIcon></div>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><TwitterIcon sx={{color:'white'}}></TwitterIcon></div>
            </div>
        </div>
        
    </div>
    <h3 className="text-white text-base" style={{fontFamily:'Montserrat'}}>Copywright 2023</h3>
    </div>
    
    )
}

export default Footer