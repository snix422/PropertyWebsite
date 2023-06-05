import { Link } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
    <div style={{display:'flex', flexDirection:'column',background:'black', alignItems:'center', paddingTop:'15px', paddingBottom:'30px'}}>
    <div style={{display:'flex', height:'25vh',width:'100vw', justifyContent:'center', alignItems:'center', gap:'300px'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <Link to='/about' style={{color:'white',fontFamily:'Montserrat'}}> Home</Link>
            <Link to='/about' style={{color:'white',fontFamily:'Montserrat'}}> O nas</Link>
            <Link to='/about' style={{color:'white',fontFamily:'Montserrat'}}> Team</Link>
            <Link to='/about' style={{color:'white',fontFamily:'Montserrat'}}> Ulubione</Link>
        </div>
        <div style={{display:'flex', flexDirection:'column',gap:'5px'}}>
            <h3 style={{color:'white', fontFamily:'Montserrat'}}>Kontakt:</h3>
            <div style={{display:'flex', gap:'10px'}}>
                <BusinessIcon sx={{color:'white'}}></BusinessIcon>
                <h3 style={{color:'white', fontFamily:'Montserrat'}}>ul.Sienkiewicza 53 Lodz</h3>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
                <SmartphoneIcon sx={{color:'white'}}></SmartphoneIcon>
                <h3 style={{color:'white', fontFamily:'Montserrat'}}>666 666 666</h3>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
                <EmailIcon sx={{color:'white'}}></EmailIcon>
                <h3 style={{color:'white', fontFamily:'Montserrat'}}>nieruchomości.gmail@.com</h3>
            </div> 
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <h3 style={{color:'white', fontFamily:'Montserrat'}}>Sledz nas:</h3>
            <div style={{display:'flex',gap:'5px'}}>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><FacebookIcon sx={{color:'white'}}></FacebookIcon></div>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><InstagramIcon sx={{color:'white'}}></InstagramIcon></div>
                <div style={{borderRadius:'50%', border:'1px solid white', padding:'4px'}}><TwitterIcon sx={{color:'white'}}></TwitterIcon></div>
            </div>
        </div>
        
    </div>
    <h3 style={{fontSize:'15px', fontFamily:'Montserrat', color:'white'}}>Copywright 2023</h3>
    </div>
    
    )
}

export default Footer