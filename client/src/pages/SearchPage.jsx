import { useNavigate } from "react-router-dom"
import Search from "../components/Search"
import SearchResult from "../components/SearchResult"
import { useEffect, useState } from "react"
import PathConstants from "../routes/PathConstants"

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        console.log('here');
    })

    const clickHandler = () => {
        
        navigate(PathConstants.PROFILE)
    }

    const backHandler = () => {
        navigate(PathConstants.HOME)
    }

    return (
        <div className="basis-[100vw] h-[100vh] flex-shrink-0 flex flex-col justify-center items-center">
            <button onClick={backHandler} className="cursor-pointer rounded p-2 m-2 absolute top-0 left-0"> Home</button>
            <Search setSearchResult={setSearchResult}/>
            <div>
                {searchResult.map((result, idx) => (
                    <div key={idx} onClick={clickHandler} className="">
                        {result.username}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage