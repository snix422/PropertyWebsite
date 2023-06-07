import { useSelector } from "react-redux"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import { motion } from "framer-motion";

const Team = () => {

    const team = useSelector((state:any)=>state.team.persons);
    console.log(team);
    return(
        <>
        <Header />
        <motion.div className="bg-team" style={{display:'flex',flexDirection:'column',alignItems:'center',minHeight:'50vh', width:'100vw', paddingTop:'50px', paddingBottom:'50px'}}>
            <motion.h3 initial={{y:'-100vh'}} animate={{y:0}} transition={{delay:0.2}} style={{fontSize:'30px', fontFamily:'Montserrat', color:'white'}}>Nasz zespol</motion.h3>
            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:1, type:'spring', stiffness:300}} style={{display:'flex', justifyContent:'center', gap:'50px', marginTop:'30px'}}>
                {team.map((person:any)=>{
                    return(
                        <div className="card" style={{flexDirection:'column', width:'400px', height:'550px', borderRadius:'5%', background:'white', gap:'10px', position:'relative'}}>
                            <img src={person.img} alt="person" style={{width:'100%', height:'100%', borderRadius:'5%'}}></img>
                            <div className="overlay">
                                <h2 style={{fontSize:'25px', fontFamily:'Montserrat',color:'white'}}>{person.name}</h2> 
                                <h2 style={{fontSize:'20px', fontFamily:'Montserrat',color:'white'}}>E-mail: {person.email}</h2>
                                <h2 style={{fontSize:'20px', fontFamily:'Montserrat',color:'white'}}>Nr telefonu: {person.phone}</h2>
                                <h2 style={{fontSize:'20px', fontFamily:'Montserrat',color:'white'}}>{person.profession}</h2>
                            </div>
                        </div>
                    )
                })}

            </motion.div>
        </motion.div>
        <Footer />
        </>
    )
}

export default Team