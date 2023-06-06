import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import {useEffect, useState} from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
        <div className="slider" style={{width:'100vw',height:'100vh',position:'relative', display:'flex', alignItems:'center'}}>
             <NavigateBeforeIcon onClick={previousSlider} sx={{position:'absolute', left:'20%', fontSize:'100px',color: index === 0 ? 'black' : 'white'}}/>
            <img src={sliders[index]} style={{width:'100%',height:'100vh'}}></img>
            <NavigateNextIcon onClick={nextSlider}sx={{position:'absolute', right:'20%',fontSize:'100px',color: index === 0 ? 'black' : 'white'}}/>
            {index === 0 ?<h3 style={{position:'absolute', left:'30%', top:'30%', fontSize:'50px', fontFamily:'Montserrat'}}>Poznaj naszą ofertę</h3>
         : null }
             {index === 1 ?<h3 style={{position:'absolute', right:'20%', top:'25%', fontSize:'50px', fontFamily:'Montserrat', color:'white'}}>Poznaj naszą ofertę</h3>
         : null }
            {index === 2 ?<h3 style={{position:'absolute', left:'20%', top:'30%', fontSize:'50px', fontFamily:'Montserrat', color:'white'}}>Poznaj naszą ofertę</h3>
         : null }
           {index === 3 ?<h3 style={{position:'absolute', left:'20%', bottom:'30%', fontSize:'50px', fontFamily:'Montserrat', color:'white'}}>Poznaj naszą ofertę</h3>
         : null }
        </div>
    )
}

export default Slider