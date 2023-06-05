import Footer from "../Footer/Footert"
import Header from "../Header/Header"

const About = () => {
    return(
        <>
        <Header />
        <div className="bg-about" style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100vw', minHeight:'50vh', gap:'60px', paddingTop:'50px',paddingBottom:'30px'}}>
            <h2 style={{fontSize:'30px', fontFamily:'Montserrat'}}>O firmie</h2>
            <h4 style={{fontSize:'20px', fontFamily:'Montserrat',width:'80%',lineHeight:'40px'}}>Jesteśmy zespołem osób, tworzącymi agencję nieruchomości w Łodzi, dla których niezwykle ważne jest indywidualne podejście do każdego klienta i odpowiedzialność za podjęte zobowiązania.

Zwracamy uwagę na potrzeby klienta, a nasze działanie dostosowujemy do konkretnej sytuacji. Dzięki temu mamy grono zadowolonych osób, które z nami współpracowały.

Do naszej pracy podchodzimy z pasją i zaangażowaniem. Wykorzystujemy naszą wiedzę i wieloletnie doświadczenie, aby współpraca z nami dawała Klientom wymierne korzyści oraz te niemierzalne w postaci komfortu i spokoju podczas przeprowadzania transakcji.

Wiemy, że sprzedaż nieruchomości jest trudną decyzją. Uświadamiamy naszych klientów, że nieznajomość określonych norm prawnych i szereg wątpliwości powstałych przy transakcji jest całkowicie normalny. Dlatego właśnie oferujemy szereg usług związanych z obrotem nieruchomościami i rzetelne pośrednictwo nieruchomości w Łodzi.</h4>
        </div>
        <Footer />
        </>
    )
}

export default About