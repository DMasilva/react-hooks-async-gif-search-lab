import './style.css'

function GifLIst({gifs}){

    const newData= gifs.map((array, index)=>{
       return <img className="image" src={array.images.original.url} alt ="giphy" key={index} />
    })

    return(
        <div className="giphy">
            {newData}
        </div>
    )
}
export default GifLIst

