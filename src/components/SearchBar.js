import React from "react"
import { TextField } from "@material-ui/core"

function SearchBar(props) {
  const { value, handleChange } = props
  return (
    <div>
      <TextField
        placeholder="Search"
        variant="standard"
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default SearchBar
