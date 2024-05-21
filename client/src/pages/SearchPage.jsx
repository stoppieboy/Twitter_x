import { useNavigate } from "react-router-dom"
import Search from "../components/Search"
import SearchResult from "../components/SearchResult"
import { useState } from "react"
import PathConstants from "../routes/PathConstants"
import axios from "axios"

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([])
    const navigate = useNavigate()

    const backHandler = () => {
        navigate(PathConstants.HOME)
    }

    const followHandler = async(id) => {
        // TODO study redux and context API to find a way to share current user data with all components
        // try{
        // FIXME avoid using explicit api url
        //     await axios.post("http://localhost:3000/api/follow", {
        //         "followeeID": id
        //     }, {
        //         headers: {
        //             Authorization: `Bearer ${}`
        //         }
        //     })
        // }catch(err){

        // }
    }

    return (
        <div className="basis-[100vw] h-[100vh] flex-shrink-0 flex flex-col justify-center items-center">
            <button onClick={backHandler} className="cursor-pointer rounded p-2 m-2 absolute top-0 left-0">Home</button>
            <Search setSearchResult={setSearchResult}/>
            <div style={(searchResult.length) > 0 ? {marginTop: "20px"} : {}} className="">
                {searchResult.map((result, idx) => (
                    <SearchResult key={idx} user={result} follow={followHandler}/>
                ))}
            </div>
        </div>
    )
}

export default SearchPage