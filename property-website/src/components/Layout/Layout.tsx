import FiltersComponent from "../Filters/FiltersComponent"
import Footer from "../Footer/Footert"
import Header from "../Header/Header"
import Slider from "../Header/Silder"

const Layout = () => {
    return(
        <>
        <div style={{minHeight:'220vh', display:'flex', flexDirection:'column'}}>
        <Header />
        <Slider />
        <FiltersComponent />
        </div>
         <Footer />
         </>
    )
}

export default Layout