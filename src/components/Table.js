import React from "react"
import { TableRow, TableCell, Table, TableHead } from "@material-ui/core"
import IconAdder from "./IconAdder"

const People = ({ people, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Table className="list-group mb-4">
      <TableHead>
        <TableCell>Icon</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Height</TableCell>
        <TableCell>Mass</TableCell>
        <TableCell>Hair Color</TableCell>
        <TableCell>Skin Color</TableCell>
        <TableCell>Birth year</TableCell>
        <TableCell>Gender</TableCell>
      </TableHead>
      {people.map((row) => (
        <TableRow key={row.name}>
          {" "}
          <TableCell>
            <IconAdder {...row} />
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}{" "}
          </TableCell>
          <TableCell>{row.height}</TableCell>
          <TableCell>{row.mass}</TableCell>
          <TableCell>{row.hair_color}</TableCell>
          <TableCell>{row.skin_color}</TableCell>
          <TableCell>{row.birth_year}</TableCell>
          <TableCell>{row.gender}</TableCell>{" "}
        </TableRow>
      ))}
    </Table>
  )
}

export default People
