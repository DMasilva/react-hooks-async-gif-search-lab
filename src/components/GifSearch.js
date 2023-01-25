

function GifSearch({setSearchString}){



    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            setSearchString(e.target.search.value);
        }}>
            <label>Enter search name:
            <input name="search" type="text"/>
            <input type="submit"/>
            </label>
        </form>
    )
}

export default GifSearch;