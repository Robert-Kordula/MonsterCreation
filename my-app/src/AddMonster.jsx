import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import useFetchData from "./useFetchData.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AttributeFields from "./AttributesFields";

function AddMonsterPage() {
    return (
        <div>
            <AttributeFields ></AttributeFields>
            <Button></Button>
        </div>
    )
}

export default AddMonsterPage;