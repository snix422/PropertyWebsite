import { useSelector } from "react-redux"

const SearchComponent = () => {

    const searchItems = useSelector((state:any)=>state.search.items);
    console.log(searchItems);
    const local = localStorage.getItem('search');
    console.log(local)
    

    return(
        <div>
            <h2>Hello</h2>
            {searchItems.map((offer:any)=>{
                return(
                    <h2>{offer.city}</h2>
                )
            })}
        </div>
    )
}

export default SearchComponent