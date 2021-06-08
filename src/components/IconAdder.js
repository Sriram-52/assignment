import React, { useEffect, useState } from "react"
import axios from "axios"
import { CircularProgress } from "@material-ui/core"

function IconAdder(props) {
  const { species } = props
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchSpecies = async (api) => {
      try {
        let res = await axios.get(api)
        setIsLoading(false)
        setName(res.data.name)
      } catch (err) {
        setIsLoading(true)
        console.log(err)
      }
    }
    if (species.length) fetchSpecies(species[0])
  }, [species])

  const IconSelector = () => {
    if (isLoading) return <CircularProgress />
    if (name.toLowerCase() === "droid")
      return <i class="fa fa-android" aria-hidden="true"></i>
    if (name.toLowerCase() === "human")
      return <i class="fa fa-circle" aria-hidden="true"></i>
    return <i class="fa fa-question-circle" aria-hidden="true"></i>
  }

  return (
    <div>
      {!species.length ? (
        <i class="fa fa-question-circle" aria-hidden="true"></i>
      ) : (
        <IconSelector />
      )}
    </div>
  )
}

export default IconAdder
