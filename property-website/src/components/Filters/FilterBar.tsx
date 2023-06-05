import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react";


const FilterBar = () => {

    const [age, setAge] = useState('');

    const handleChange = (event:any) => {
      setAge(event.target.value);
    };

    return(
    <div className="filter-bar" style={{display:'flex', flexDirection:'column',alignItems:'center',width:'90vw', minHeight:'30vh', borderRadius:'15px',background:'white',position:'absolute', left:'5%', top:'100%', paddingBottom:'10px', paddingTop:'10px'}}>
        <h3 style={{fontFamily:'Montserrat', fontSize:'25px'}}>Wyszukaj dla Siebie dom</h3>
        <div style={{display:'flex', width:'90vw', flexWrap:'wrap', justifyContent:'center',alignItems:'center', gap:'10px',height:'20vh'}}>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Typ</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
        >
         <MenuItem value={10}>Mieszkanie</MenuItem>
        <MenuItem value={20}>Dom</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'300px'}}>
        <InputLabel id="demo-simple-select-label">Sprzedaz/Wynajem</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
        >
         <MenuItem value={10}>Sprzedaz</MenuItem>
        <MenuItem value={20}>Wynajem</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Miasto</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
        >
         <MenuItem value={10}>Lodz</MenuItem>
        <MenuItem value={20}>Warszawa</MenuItem>
         <MenuItem value={30}>Krakow</MenuItem>
         <MenuItem value={30}>Wroclaw</MenuItem>
         <MenuItem value={30}>Gdansk</MenuItem>
         </Select>
        </FormControl>
        <FormControl sx={{width:'100px'}}>
        <InputLabel id="demo-simple-select-label">Metraz</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
        >
         <MenuItem value={10}>Do 30m2</MenuItem>
        <MenuItem value={20}>Do 50m2</MenuItem>
         <MenuItem value={30}>Do 100m2</MenuItem>
         <MenuItem value={30}>Powyzej 100</MenuItem>
         </Select>
        </FormControl>
        <input type="number" placeholder="Od(zł)"></input>
        <input type="number" placeholder="Do(zł)"></input>
        </div>
        <button>Szukaj</button>
    </div>)
}

export default FilterBar