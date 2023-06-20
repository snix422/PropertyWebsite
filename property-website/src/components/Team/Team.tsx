import { useSelector } from "react-redux"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import { motion } from "framer-motion";
import { PersonsType } from "../../Types/Types";

const Team = () => {

    const team = useSelector((state:any)=>state.team.persons);
    console.log(team);
    return(
        <>
        <Header />
        <motion.div className="bg-team flex flex-col items-center w-screen pt-12 pb-12" style={{minHeight:'50vh'}}>
            <motion.h3 initial={{y:'-100vh'}} animate={{y:0}} transition={{delay:0.2}} className="text-white" style={{fontFamily:'Montserrat', fontSize:'35px'}}>Nasz zespol</motion.h3>
            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:1, type:'spring', duration:2.5, stiffness:500}} className="flex justify-center gap-12 mt-8 flex-wrap">
                {team.map((person:PersonsType)=>{
                    return(
                        <div className="card bg-white relative rounded 2x1:w-96 xl:w-96 lg:w-80 md:w-70 xs:w-60" style={{height:'550px'}}>
                            <img src={person.img} alt="person" className="rounded" style={{width:'100%', height:'100%'}}></img>
                            <div className="overlay">
                                <h2 className="text-xl text-white" style={{fontFamily:'Montserrat'}}>{person.name}</h2> 
                                <h2 className="text-xl text-white" style={{fontFamily:'Montserrat'}}>E-mail: {person.email}</h2>
                                <h2 className="text-xl text-white" style={{fontFamily:'Montserrat'}}>Nr telefonu: {person.phone}</h2>
                                <h2 className="text-xl text-white" style={{fontFamily:'Montserrat'}}>{person.profession}</h2>
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