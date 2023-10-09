import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import {useEffect, useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {motion} from 'framer-motion'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide, Nav} from 'hero-slider'

const Slider = () => {
    const sliders = [slider1,slider2,slider3,slider4];
    const [index, setIndex] = useState(0);
    const [colorArrow, setColorArrow] = useState('white');

    const nextSlider = () => {
        if(index === sliders.length -1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }

    const previousSlider = () => {
            if(index === 0){
                setIndex(sliders.length -1)
            }else{
                setIndex(index-1)
            }
    }

    useEffect(()=>{
        if(index === 1 || 3){
            setColorArrow('white')
        }else{
            setColorArrow('black')
        }
    },[])

    return(
      
        <HeroSlider
            slidingAnimation="fade"
            orientation="fade"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
              }
            onChange={(nextSlide) => console.log("onChange", nextSlide)}
            onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0)"
              }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "100vh"
              }}
             
        >

            <Slide 
            className='relative max-md:pl-5'
            background={{
                backgroundImageSrc:slider1,
                backgroundAttachment: "fixed",
                backgroundSize: "contain ",
                backgroundRepeat: "no-repeat",
                backfaceVisibility: "hidden",
            
            }}>
                <h2 className='absolute top-1/4 2x1:left-1/4 lg:left-1/4 md:right-20 sm:right-5 max-sm:pl-5' style={{fontFamily:'Montserrat', fontSize:'40px'}}>Poznaj nasza oferte</h2>
            </Slide>
             <Slide 
             className='relative max-md:pl-5'
             style={{border: '2px solid red'}}
             background={{
                backgroundImageSrc:slider2,
                backgroundAttachment: "fixed",
          backgroundSize: "contain ",
          backgroundRepeat: "no-repeat",
          backfaceVisibility: "hidden"
            }}>
                <h2 className="absolute top-1/4 2x1:right-40 lg:right-40 md:right-20 sm:right-5  max-sm:pl-5  " style={{fontFamily:'Montserrat', fontSize:'40px',color:'white'}}>Z Nami tworzysz własną przyszłość</h2>
            </Slide>
             <Slide 
             className='relative max-md:pl-5'
             background={{
                backgroundImageSrc:slider4,
                backgroundAttachment: "fixed",
                backgroundSize: "contain ",
                backgroundRepeat: "no-repeat",
                backfaceVisibility: "hidden"
            }}>
                <h2 className="absolute bottom-1/4 2x1:left-40 lg:left-40 md:left-20 sm:left-5 max-sm:pl-5 " style={{fontFamily:'Montserrat', fontSize:'40px',color:'white'}}>Zamień marzenia w rzeczywistość</h2>
            </Slide>
            <Nav color='black'/>
        </HeroSlider>

    )
}

export default Slider