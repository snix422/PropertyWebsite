import '../../App.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'


const Header = () => {
    return(
    <div className="bg-header" style={{width:'100vw',height:'10vw',display:'flex',justifyContent:'center', alignItems:'center',gap:'20px', position:'relative'}}>
        <img  style={{position:'absolute', left:'10%', width:'200px', height:'100px'}} src={logo} alt='logo' />
        <nav style={{display:'flex', flexDirection:'row', gap:'100px', marginLeft:'500px'}}>
        <a style={{color:'white', fontSize:'25px'}}>Home</a>
        <a style={{color:'white', fontSize:'25px'}}>O nas</a>
        <a style={{color:'white', fontSize:'25px'}}>Agenci</a>
        <a style={{color:'white', fontSize:'25px'}}>Kontakt</a>
        </nav>
    </div>
   
    )
}

export default Header