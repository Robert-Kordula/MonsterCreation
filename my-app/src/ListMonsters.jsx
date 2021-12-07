import "./App.css";
import React from "react";
import useFetchData from "./useFetchData.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

function ListMonstersPage() {
  const { data } = useFetchData("http://localhost:3500/monster");
  return (
    <div className="App">
      <header>
        <p style={{display: "grid"}}>List Of Monsters</p>
      </header>
      {data?.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead id="Labels">
              <TableRow>
                <TableHeader name="Name" />
                <TableHeader name="Type" />
                <TableHeader name="Size" />
                <TableHeader name="HP" />
                <TableHeader name="CR" />
                <TableCell colSpan={2}>
                  <Button className="Buttons" component={Link} to="/Add">Add New Monster</Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((monster) => (
                <TableRow className="Monster-Row">
                  <TableCell>
                    <strong>{monster.name}</strong>
                  </TableCell>
                  <TableCell>{monster.type}</TableCell>
                  <TableCell>{monster.size}</TableCell>
                  <TableCell>{monster.hit_points}</TableCell>
                  <TableCell>{monster.challenge_rating}</TableCell>
                  <TableCell>
                    <Button className="Buttons">EDIT</Button>
                  </TableCell>
                  <TableCell>
                    <Button className="Buttons">DELETE</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

function TableHeader(params) {
    return (
      <TableCell>
        <strong style={{ color: "white" }}>{params.name}</strong>
        <Button className="Buttons">SORT</Button>
      </TableCell>
    );
  }

export default ListMonstersPage;