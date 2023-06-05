import bgFilter from '../../video/pexels-kindel-media-7578552-3840x2160-30fps.mp4'
import Footer from '../Footer/Footert'
import FilterBar from './FilterBar'

const FiltersComponent = () => {
    return(
        <div className="filters-container" style={{height:'50vh', width:'100vw', position:'relative'}}>
            <video src={bgFilter} autoPlay loop muted>
            </video>
            <FilterBar />
        </div>
    )
}

export default FiltersComponent