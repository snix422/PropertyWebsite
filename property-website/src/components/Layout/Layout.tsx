import FiltersComponent from "../Filters/FiltersComponent"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import Slider from "../Header/Silder"
import RecommendsOffer from "../RecommendsOffer/RecommendsOffer"

const Layout = () => {
    return(
        <>
        <div style={{minHeight:'220vh', display:'flex', flexDirection:'column'}}>
        <Header />
        <Slider />
        <FiltersComponent />
        </div>
        <RecommendsOffer />
         <Footer />
         </>
    )
}

export default Layout