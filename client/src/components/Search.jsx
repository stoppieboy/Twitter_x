import { Autocomplete, TextField } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"


// eslint-disable-next-line react/prop-types
const Search = ({ setSearchResult }) => {

    const [searchTerm, setSearchTerm] = useState("")

    // debounicing
    useEffect(() => {
      const debounce = setTimeout(() => {
        axios.get(`http://localhost:3000/search/user?q=${searchTerm}`).then((res) => {
            setSearchResult(res.data.result)
        })
      }, 300);
    
      return () => clearTimeout(debounce)
    }, [searchTerm])

    return (
        // <div><input type="text" placeholder="Search..." className="rounded-md w-28" onChange={searchHandler}/></div>
        <div className="min-w-[400px]">
            {/* <input type="text" /> */}
            <Autocomplete
                id="search-box"
                freeSolo
                // options={suggestions.map((suggestion) => suggestion.username)}
                options={[]}
                onInputChange={(_, newValue) => setSearchTerm(newValue)}
                // renderInput={(params) => <TextField {...params} sx={{color: "white"}} label="Search User"/>}
                renderInput={(params) => <input {...params} onChange={(e) => setSearchTerm(e.target.value)} className="px-3 py-2 w-full" placeholder="Search User"/>}
                // renderInput={(params) => <fieldset><legend>set</legend><input {...params} value="Search User"/></fieldset>}
                sx={{}}
                // open={suggestions.length > 0}
            />
        </div>
    )
}

export default Search