import react, {useState, useEffect} from "react"
import GifLIst from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){

    const [gifs, setGifs]=useState([])
    const [search, setSearch]= useState('dolphin')

useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=D4JjzCeLTFYWpcU84vtbwheDlvlOez1y`)
    .then(res=>res.json())
    .then(data=>{
        setGifs(data.data);
    })
},[search])

function setSearchString(str){
    setSearch(str)
}


    return(
        <div>
            <GifSearch setSearchString={setSearchString}/>
            <GifLIst gifs={gifs}/>
        </div>
    )
}
export default GifListContainer;