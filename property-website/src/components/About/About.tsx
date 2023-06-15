import { motion } from "framer-motion"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"

const About = () => {
    return(
        <>
        <Header />
        <div className="bg-about flex flex-col items-center w-screen gap-14 pt-12 pb-8" style={{minHeight:'50vh', }}>
            <motion.h2 initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:0.1, type:"spring", stiffness:200}} className="text-3x1" style={{fontFamily:'Montserrat', fontSize:'35px'}}>O firmie</motion.h2>
            <motion.h4 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="text-xl w-4/5 leading-10" style={{ fontFamily:'Montserrat'}}>Jesteśmy zespołem osób, tworzącymi agencję nieruchomości w Łodzi, dla których niezwykle ważne jest indywidualne podejście do każdego klienta i odpowiedzialność za podjęte zobowiązania.

Zwracamy uwagę na potrzeby klienta, a nasze działanie dostosowujemy do konkretnej sytuacji. Dzięki temu mamy grono zadowolonych osób, które z nami współpracowały.

Do naszej pracy podchodzimy z pasją i zaangażowaniem. Wykorzystujemy naszą wiedzę i wieloletnie doświadczenie, aby współpraca z nami dawała Klientom wymierne korzyści oraz te niemierzalne w postaci komfortu i spokoju podczas przeprowadzania transakcji.

Wiemy, że sprzedaż nieruchomości jest trudną decyzją. Uświadamiamy naszych klientów, że nieznajomość określonych norm prawnych i szereg wątpliwości powstałych przy transakcji jest całkowicie normalny. Dlatego właśnie oferujemy szereg usług związanych z obrotem nieruchomościami i rzetelne pośrednictwo nieruchomości w Łodzi.</motion.h4>
        </div>
        <Footer />
        </>
    )
}

export default About