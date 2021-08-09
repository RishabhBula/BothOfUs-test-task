import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Pagination from "@material-ui/lab/Pagination";
import MessageCard from "./MessageCard";
import SortDown from "../../icons/SortDown";

const useStyles = makeStyles({
 table: {
  minWidth: 650,
  borderCollapse: "separate",
  borderSpacing: "0 15px",
 },
});

function createData(name, calories, fat, carbs, protein) {
 return { name, calories, fat, carbs, protein };
}

const rows = [
 createData(
  "Frozen yoghurt",
  "Dec 12, 2020",
  "Papaya Peel, Maria Akeberg",
  24,
  4.0,
 ),
 createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
 createData("Eclair", 262, 16.0, 24, 6.0),
 createData("Cupcake", 305, 3.7, 67, 4.3),
 createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Messages() {
 const classes = useStyles();

 return (
  <>
   <TableContainer className="messages-card">
    <Table className={classes.table} aria-label="simple table">
     <TableHead>
      <TableRow>
       <TableCell>
        Sender <SortDown />{" "}
       </TableCell>
       <TableCell align="Left">
        Date <SortDown />
       </TableCell>
       <TableCell align="Left">
        Content <SortDown />
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {rows.map((row) => (
       <MessageCard row={row} />
      ))}
     </TableBody>
    </Table>
   </TableContainer>
   <Pagination count={10} variant="outlined" className="m-pagination" />
  </>
 );
}
