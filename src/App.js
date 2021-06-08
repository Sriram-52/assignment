import React, { useEffect, useState } from "react"
import axios from "axios"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import SearchBar from "./components/SearchBar"

function App(props) {
  const [people, setpeople] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [peoplePerPage] = useState(10)
  const [res, setRes] = useState({})
  const [matches, setMatches] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (input) => {
    function escapeRegex(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    const data = people
    input = escapeRegex(input.toLowerCase())
    let matches = data.filter((state) => {
      const regex = new RegExp(`[A-Za-z.\s]*${input}[A-Za-z.\s]*`)
      return regex.test(
        state.name.toLowerCase()
      )
    })
    if (input.length === 0) {
      matches = []
    }
    setMatches(matches)
  }

  const handleChange = (e) => {
    handleSearch(e.target.value)
    setSearch(e.target.value)
  }

  const fetchPeople = async (api) => {
    setLoading(true)
    try {
      const res = await axios.get(api)
      setRes(res.data)
      setpeople(res.data.results)
      setCount(res.data.count)
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPeople("https://swapi.dev/api/people/")
  }, [])

  const paginate = (pageNumber) => {
    fetchPeople(`https://swapi.dev/api/people/?page=${pageNumber}`)
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div className="text-center">
        <SearchBar search={search} handleChange={handleChange} />
      </div>
      <Table people={matches.length ? matches : people} loading={loading} />
      <Pagination
        postsPerPage={peoplePerPage}
        totalPosts={matches.length ? matches.length : count}
        paginate={paginate}
      />
    </div>
  )
}

export default App
