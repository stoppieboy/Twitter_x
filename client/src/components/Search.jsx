import { Autocomplete } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"


// eslint-disable-next-line react/prop-types
const Search = ({ setSearchResult }) => {

    const [searchTerm, setSearchTerm] = useState("")

    // debounicing
    useEffect(() => {
      const debounce = setTimeout(() => {
        axios.get(`http://localhost:3000/search/user?q=${searchTerm}&user_id=${localStorage.getItem("userID")}`).then((res) => {
            setSearchResult(res.data.result)
        })
      }, 500);
    
      return () => clearTimeout(debounce)
    }, [searchTerm])

    return (
        <div className="min-w-[400px]">
            <Autocomplete
                id="search-box"
                freeSolo
                // options={suggestions.map((suggestion) => suggestion.username)}
                options={[]}
                // onInputChange={(_, newValue) => setSearchTerm(newValue)}
                // renderInput={(params) => <TextField {...params} sx={{color: "white"}} label="Search User"/>}
                renderInput={(params) => <input {...params} autoComplete="off" onChange={(e) => setSearchTerm(e.target.value)} className="px-3 py-2 w-full" placeholder="Search User"/>}
                // renderInput={(params) => <fieldset><legend>set</legend><input {...params} value="Search User"/></fieldset>}
                sx={{}}
                // open={suggestions.length > 0}
            />
        </div>
    )
}

export default Search