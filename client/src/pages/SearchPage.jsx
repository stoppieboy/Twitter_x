import Search from "../components/Search"
import SearchResult from "../components/SearchResult"
import { useState } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([])

    const followHandler = async(id) => {
        console.log('this is id',id.target);
        // TODO study redux and context API to find a way to share current user data with all components
        try{
        // FIXME avoid using explicit api url
            await axios.post("http://localhost:3000/api/follow", {
                "followeeID": id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('API_KEY')}`
                }
            })
        }catch(err){
            console.log("error:",err)// some error in following the user
        }
    }

    const unfollowHandler = async(id) => {
        try{
            await axios.post("http://localhost:3000/api/unfollow",{
                "followeeID": id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('API_KEY')}`
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="" id="home-container">
            <Navbar/>
            <div className="p-8 flex-grow flex flex-col items-center">
                <Search setSearchResult={setSearchResult}/>
                <div style={(searchResult.length) > 0 ? {marginTop: "20px"} : {}} className="w-[80%]">
                    {searchResult.map((result, idx) => (
                        <SearchResult key={idx} user={result} follow={followHandler} unfollow={unfollowHandler}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPage