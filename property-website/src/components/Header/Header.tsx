import '../../App.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/preview.jpg'
import { motion } from 'framer-motion'


const Header = () => {
    return(
    <div className="bg" style={{width:'100vw',height:'10vh',display:'flex',justifyContent:'center', alignItems:'center',gap:'20px', position:'relative'}}>
        <img  style={{position:'absolute', left:'10%', width:'150px', height:'15vh', background:'transparent'}} src={logo} alt='logo' />
        <nav style={{display:'flex', flexDirection:'row', gap:'100px', marginLeft:'500px'}}>
        <Link to='/' style={{fontSize:'25px', fontFamily:'Montserrat'}}>Home</Link>
        <Link to='/about' style={{fontSize:'25px', fontFamily:'Montserrat'}}>O nas</Link>
        <Link to='/team' style={{fontSize:'25px', fontFamily:'Montserrat'}}>Nasz zespol</Link>
        <Link to='/contact' style={{fontSize:'25px', fontFamily:'Montserrat'}}>Kontakt</Link>
        </nav>
    </div>
   
    )
}

export default Header