import bgFilter from '../../video/pexels-kindel-media-7578552-3840x2160-30fps.mp4'
import Footer from '../Footer/Footert'
import FilterBar from './FilterBar'
import '../../App.css'

const FiltersComponent = () => {
    return(
        <div className='bg-filter_component flex justify-center items-center'>
            <FilterBar />
        </div>
    )
}

export default FiltersComponent